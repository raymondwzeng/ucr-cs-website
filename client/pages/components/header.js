export default function Header() {
    return (
        <header>
                <a id='logo' href="/">CS @ UCR</a>
                <div id='menu'>
                    <a href="/about-us">About Us</a>
                    <a href="/documentation">Norm Navel Bot</a>
                    <a id="join" rel="noopener noreferrer" target="_blank" href="https://discord.gg/S7MGSV4">Join the Server</a>
                </div>

        <style jsx>
            {`
                a {
                    color: #000000;
                    outline: none;
                    text-decoration: none;
                    display: flex;
                    align-items: center;
                }

                #menu > a:hover {
                    border-bottom: 1px solid #eaeaea;
                }

                #join {
                    transition-duration: 300ms;
                    padding: 0.5rem;
                    background: #eaeaea;
                    border-radius: 10px;
                    border-bottom: none;
                }

                #join:hover {
                    transition-duration: 300ms;
                    background: #000000;
                }

                header {
                    width: 100%;
                    display: flex;
                    padding: 1rem 0;
                    border-bottom: 1px solid #eaeaea;
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