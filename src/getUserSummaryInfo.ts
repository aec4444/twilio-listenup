import { IUserSummaryInfo } from './types/IUserSummaryInfo';
import axios from 'axios';
import { IFriends } from './types/IFriends';
import { API_ROUTES, API_URI } from './constants';
import { IPlays } from './types/IPlays';
import { IFriendsDetail } from './types/IFriendsDetail';
import { IPlaysDetail } from './types/IPlaysDetail';

const getFriends = async (): Promise<IFriends> => {
    const uri = `${API_URI}${API_ROUTES.FRIENDS}`;
    const response = await axios.get<IFriends>(uri);

    return response.data;
};

const getPlays = async (): Promise<IPlays> => {
    const uri = `${API_URI}${API_ROUTES.PLAYS}`;
    const response = await axios.get<IPlays>(uri);

    return response.data;
};

const getFriendsDetail = async (uri: string): Promise<string[]> => {
    const response = await axios.get<IFriendsDetail>(`${API_URI}${uri}`);
    return response.data.friends || [];
};

const getPlaysCount = async (uri: string): Promise<number> => {
    const response = await axios.get<IPlaysDetail>(`${API_URI}${uri}`);
    return response.data.plays?.length || 0;
};

/**
 * Get a list of the users in the system
 */
export const getUserSummaryInfo = async (): Promise<IUserSummaryInfo[]> => {
    // call the friends and plays endpoints to get a union of the 2 lists of users
    const listResults = await Promise.all([getFriends(), getPlays()]);
    const [friendsResult, playsResult] = listResults;

    // populate the main list from the friends list and set the plays item if it exists
    const summaryInfo = friendsResult.friends.map<IUserSummaryInfo>((item) => {
        const { username, uri } = item;

        const plays = playsResult.plays.find((p) => p.username === username);

        return {
            friends: [],
            tracksListenedTo: 0,
            username,
            friendDetailUri: uri,
            playsDetailUri: plays ? plays.uri : undefined
        };
    });

    // now update the plays url for those that do exist.
    summaryInfo.push(
        ...playsResult.plays
            .filter((p) => !summaryInfo.find((s) => s.username === p.username))
            .map<IUserSummaryInfo>((p) => ({
                username: p.username,
                playsDetailUri: p.uri,
                tracksListenedTo: 0,
                friends: []
            }))
    );

    // at this point we have the entire list and we have the detail uris needed to get the counts
    // since the services do not give this summary information out of the box
    for (const summaryItem of summaryInfo) {
        const { friendDetailUri, playsDetailUri } = summaryItem;

        // use resolved promises here so we can not make requests that do not exist, but we can continue with the loop regardless
        const [friendsDetailResult, playsDetailResult] = await Promise.all([
            friendDetailUri ? getFriendsDetail(friendDetailUri) : Promise.resolve([]),
            playsDetailUri ? getPlaysCount(playsDetailUri) : Promise.resolve(0)
        ]);

        summaryItem.friends = friendsDetailResult;
        summaryItem.tracksListenedTo = playsDetailResult;
    }

    return summaryInfo;
};

export const getIndividualUserSummaryInfo = async (username?: string): Promise<IUserSummaryInfo | undefined> => {
    // if we do not have a username, return undefined as we have no data
    if (!username) {
        return undefined;
    }

    const friendDetailUri = `${API_ROUTES.FRIEND_DETAIL}?username=${username}`;
    const playsDetailUri = `${API_ROUTES.PLAYS_DETAIL}?username=${username}`;

    const [friendsDetailResult, playsDetailResult] = await Promise.all([getFriendsDetail(friendDetailUri), getPlaysCount(playsDetailUri)]);

    return {
        username,
        friends: friendsDetailResult,
        tracksListenedTo: playsDetailResult,
        friendDetailUri,
        playsDetailUri
    };
};

