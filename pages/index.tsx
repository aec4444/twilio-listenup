import type { NextPage } from 'next';
import Link from 'next/link';
import { Table } from 'react-bootstrap';
import { getUserSummaryInfo } from '../src/getUserSummaryInfo';
import HandleStatus from '../src/components/handleStatus';
import { useAsync } from '../src/hooks/useAsync';
import { IUserSummaryInfo } from '../src/types/IUserSummaryInfo';
import SubHeader from '../src/components/subHeader';

const Home: NextPage = () => {
    const { execute, status, value, error } = useAsync<IUserSummaryInfo[]>(getUserSummaryInfo);
    let details: JSX.Element | null = null;

    if (status === 'success') {
        details = (
            <div className="m-2">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th># Tracks Listened To</th>
                            <th># of Friends</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(value || [])?.map((item) => {
                            const { username, friends, tracksListenedTo } = item;
                            return (
                                <tr key={username}>
                                    <td>
                                        <Link href="/user/[username]" as={`/user/${username}`}>
                                            {username}
                                        </Link>
                                    </td>
                                    <td>{tracksListenedTo}</td>
                                    <td>{friends.length}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        );
    } else {
        details = <HandleStatus status={status} error={error}></HandleStatus>;
    }

    return (
      <>
        <SubHeader message="User List"></SubHeader>
        {details}
      </>
    )
};

export default Home;
