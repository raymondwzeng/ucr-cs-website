import Head from 'next/head'
import Header from './components/header'

export default function Documentation() {
    return (
        <div className='container'>
            <Head>
                <title>UCR CS Discord</title>
            </Head>
            <Header/>
            Hello, documentation?
        </div>
    )
}