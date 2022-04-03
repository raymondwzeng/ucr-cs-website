export default function Footer() {
    return(
        <div id="footer-container" className="flex center-horizontal">
            Made with love and 🍊 @ <a target="_blank" rel="noopener noreferrer" href="https://citrushack.com">Citrus Hack</a>

            <style jsx>
                {`
                #footer-container {
                    width: 100%;
                    padding: 0.3em 0;
                    gap: 0.2em;
                }
                
                  a {
                      display: inline;
                      width: fit-content;
                      color: blue;
                  }
                `}      
            </style>
        </div>

    )
}