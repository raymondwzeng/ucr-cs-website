import Footer from "./components/footer";
import Header from "./components/header";

export default function About() {
    return(<div className="container">
    <Header/>
        <main>
        <div id="endorsement" className="biggest-text">This bot is officially endorsed by Norm the Navel™</div>
        <img src="Team.jpg" alt="A group photo with Norm the Navel, the other mascot of UCR"/>
        <h1>About the Team</h1> 
        <p className="fluff">
            Created in Fall 2020 by twins Garrett and Aaron, the UCR CompSci Discord server grew to be a hub for students studying computer science, computer engineering,
            electrical engineering, and more, as well as attracting the occasional outsider interested in the various programs at UCR. 
        </p>
        <p className="fluff">
            This bot and website was created at Citrus Hack 2022 with the help of Richard and Raymond as part of an effort to improve the process of receiving roles and accessing student-made servers for various courses.
        </p>
        </main>
    <Footer/>

    <style jsx>
        {`
            img {
                width: 60%;
            }

            .fluff {
                width: 70%;
            }

            h1 {
                margin-bottom: 0;
            }

            #endorsement {
                margin-top: 3rem;
                font-weight: bold;
            }

            main {
                justify-content: start;
            }
        `}
    </style>
    </div>)
}