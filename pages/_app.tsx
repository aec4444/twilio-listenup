// ensure all pages have Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Container, Navbar } from 'react-bootstrap';

function ListenUp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Navbar bg="primary" className="p-1">
                <Navbar.Brand href="/">Listen Up</Navbar.Brand>
            </Navbar>
            <Component {...pageProps} />
        </>
    );
}

export default ListenUp;
