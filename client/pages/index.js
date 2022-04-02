import Head from 'next/head'
import Header from './components/header'

export default function Home() {
    return (
        <div className='container'>
        <Head>
            <title>UCR CS Discord</title>
        </Head>
        <Header/>
        <main>
            <div>
                Hello, node!
            </div>
        </main>

        <footer>
            Made with love @ Citrus Hack
        </footer>

        <style jsx>
            {`
                .container {
                    min-height: 100vh;
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                  }
          
                  main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                  }
          
                  footer {
                    width: 100%;
                    height: 100px;
                    border-top: 1px solid #eaeaea;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
            `}
        </style>

        <style jsx global>
            {`
                body {
                    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                }
            `}
        </style>
        </div>
        )
}