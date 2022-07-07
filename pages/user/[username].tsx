import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import HandleStatus from '../../src/components/handleStatus';
import SubHeader from '../../src/components/subHeader';
import UserDetail from '../../src/components/userDetail';
import { getIndividualUserSummaryInfo } from '../../src/getUserSummaryInfo';
import { useAsync } from '../../src/hooks/useAsync';

const Username: NextPage = () => {
    // get route info from next
    const router = useRouter();
    const { username } = router.query;

    // use this method with a param, so we need useCallback so it doesn't kick off too many cycles
    const { execute, status, value, error } = useAsync(
        useCallback(() => {
            return getIndividualUserSummaryInfo(username as string);
        }, [username])
    );

    // if success, show the results
    let details: JSX.Element | null = null;

    if (status === 'success') {
        details = <UserDetail user={value}></UserDetail>;
    } else {
        details = <HandleStatus status={status} error={error}></HandleStatus>;
    }

    const rightMsg = <Link href="/">Return Home</Link>

    return (
        <>
            <SubHeader message={username as string} rightMsg={rightMsg}></SubHeader>
            { details }
        </>
    )
};

export default Username;
