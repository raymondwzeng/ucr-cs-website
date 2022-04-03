import Head from "next/head";

export default function Header() {
    return (
        <header>
                <Head>
                    <title>UCR CompSci</title>
                </Head>
                <a className="biggest-text" id='logo' href="/">UCR CompSci</a>
                <div id='menu' className="center-vertical">
                    <a href="/about">About the Team</a>
                    <a href="/documentation">Bot Commands</a>
                    <a rel="noopener noreferrer" target="_blank" href="https://github.com/raymondwzeng/ucr-cs-website">Website Source</a>
                    <a className="outline-button button-main" id="join" rel="noopener noreferrer" target="_blank" href="https://discord.gg/S7MGSV4">Join</a>
                </div>

        <style jsx>
            {`
                #menu > a:hover {
                    border-bottom: 1px solid #eaeaea;
                }

                header {
                    background-color: #FFB81C;
                    width: 90%;
                    display: flex;
                    padding: 2% 5%;
                    justify-content: space-between;
                    align-items: center;
                }

                #logo {
                    font-weight: bold;
                }

                #menu {
                    flex-grow: 2;
                    display: flex;
                    gap: 1rem;
                    justify-content: end;
                  }
            `}
        </style>
    
        </header> 
)
}