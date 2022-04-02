export default function Footer() {
    return(
        <div id="footer-container">
            <footer>
                Made with love @ Citrus Hack
            </footer>

            <style jsx>
                {`
                #footer-container {
                    width: 100%;
                }

                footer {
                    width: 100%;
                    height: fit-content;
                    padding-bottom: 2%;
                    border-top: 1px solid #eaeaea;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                `}      
            </style>
        </div>

    )
}