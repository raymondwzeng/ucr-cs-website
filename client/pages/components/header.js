export default function Header() {
    return (
        <header>
                <a id='logo' href="/">CS @ UCR</a>
                <div id='menu'>
                    <a href="/documentation">Bot Commands</a>
                    <a className="outline-button button-main" id="join" rel="noopener noreferrer" target="_blank" href="https://discord.gg/S7MGSV4">Join</a>
                </div>

        <style jsx>
            {`
                #menu > a:hover {
                    border-bottom: 1px solid #eaeaea;
                }

                header {
                    width: 100%;
                    display: flex;
                    padding: 2% 0;
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