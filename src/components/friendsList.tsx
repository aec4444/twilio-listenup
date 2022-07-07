import Link from 'next/link';
import { ListGroup } from 'react-bootstrap';

export const FriendsList = (props: { friends?: string[] }) => {
    const { friends = [] } = props;

    if (friends) {
        return (
            <ListGroup>
                {friends.map((f) => (
                    <ListGroup.Item key={f}><Link href="/user/[username]" as={`/user/${f}`}>{f}</Link></ListGroup.Item>
                ))}
            </ListGroup>
        );
    }

    return null;
};

export default FriendsList;

