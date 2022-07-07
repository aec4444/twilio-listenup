import { IUser } from "./IUser";

export interface IUserSummaryInfo {
    username: string;
    playsDetailUri?: string;
    tracksListenedTo: number;
    friendDetailUri?: string;
    friends: string[];
}
