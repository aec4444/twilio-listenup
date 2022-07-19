import { Col, Row, Spinner } from 'react-bootstrap';
import { IUserSummaryInfo } from '../types/IUserSummaryInfo';
import FriendsList from './friendsList';

const UserDetail = (props: { user?: IUserSummaryInfo }) => {
    const { user } = props;

    if (user) {
        const { username, friends, tracksListenedTo } = user;
        return (
            <div className="m-2">
                <Row className="mb-2">
                    <Col xs={12} md={3} lg={2}>Username:</Col>
                    <Col xs={12} md={9} lg={10}>{username}</Col>
                </Row>
                <Row className="mb-2">
                    <Col xs={12} md={3} lg={2}>Tracks Listened To:</Col>
                    <Col xs={12} md={9} lg={10}>{tracksListenedTo}</Col>
                </Row>
                <Row className="mb-2">
                    <Col xs={12} md={3} lg={2}>Friends:</Col>
                    <Col xs={12} md={8} lg={9}><FriendsList friends={friends}></FriendsList></Col>
                </Row>
            </div>
        );
    }

    return null;
};

export default UserDetail;
