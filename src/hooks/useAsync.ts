// code originally here: https://usehooks.com/useAsync/
import { useCallback, useEffect, useState } from 'react';

export type UseAsyncStatusTypes = 'idle' | 'pending' | 'success' | 'error';

export interface IUseAsyncResult<T> {
    execute: () => Promise<void>;
    status: UseAsyncStatusTypes;
    value?: T;
    error?: any;
}
export const useAsync = <T, E = string>(asyncFunction: () => Promise<T>, immediate = true): IUseAsyncResult<T> => {
    const [status, setStatus] = useState<UseAsyncStatusTypes>('idle');
    const [value, setValue] = useState<T | undefined>(undefined);
    const [error, setError] = useState<E | undefined>(undefined);

    // The execute function wraps asyncFunction and
    // handles setting state for pending, value, and error.
    // useCallback ensures the below useEffect is not called
    // on every render, but only if asyncFunction changes.
    const execute = useCallback(() => {
        setStatus('pending');
        setValue(undefined);
        setError(undefined);
        return asyncFunction()
            .then((response: any) => {
                setValue(response);
                setStatus('success');
            })
            .catch((error: any) => {
                setError(error);
                setStatus('error');
            });
    }, [asyncFunction]);

    // Call execute if we want to fire it right away.
    // Otherwise execute can be called later, such as
    // in an onClick handler.
    useEffect(() => {
        if (immediate) {
            execute();
        }
    }, [execute, immediate]);
    return { execute, status, value, error };
};

