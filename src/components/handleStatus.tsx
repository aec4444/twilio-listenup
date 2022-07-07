import { Spinner } from 'react-bootstrap';
import { UseAsyncStatusTypes } from '../hooks/useAsync';

const HandleStatus = (props: { status: UseAsyncStatusTypes; error?: any }) => {
    const { status, error } = props;

    if (status === 'pending') {
        return <Spinner animation="border"></Spinner>;
    }

    if (status === 'error') {
        return <div>{error}</div>;
    }

    if (status === 'idle') {
        return <div>Nothing is happening...</div>;
    }

    return null;
};

export default HandleStatus;
