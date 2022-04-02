export default function Header() {
    return (
        <header>
                <div id='logo'>CS @ UCR</div>
                <div id='menu'>
                    <a href="/documentation">Documentation</a>
                    <a href="https://pittcsc.org">PittCSC</a>
                    <a href="https://pittcsc.org">PittCSC</a>
                    <a href="https://pittcsc.org">PittCSC</a>
                    <a href="https://pittcsc.org">PittCSC</a>
                </div>

        <style jsx>
            {`
                header {
                    width: 100%;
                    display: flex;
                    padding-bottom: 0.4rem;
                    border-bottom: 1px solid #eaeaea;
                    justify-content: space-between;
                    align-items: center;
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