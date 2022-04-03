import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'

export default function Home() {
    return (
        <div className='container'>
        <Header/>
        <main>
            <div id='cover-all'>
                <div id='vignette' className='flex'>
                    
                </div>
                <div id='center-text'>
                    <div className='flex vertical-flex center-vertical center-horizontal tall'>
                        <div className='extra-large-text bolder small-margin'>Welcome to UCR CompSci!</div>
                        <div className='flex vertical-flex center-vertical'>
                            <div id="intro" className='biggest-text'>
                            UCR CompSci is a student/alumni-ran Discord community for CS, CEN, or EE majors, as well
                            as anyone interested in those topics studying at the University of California - Riverside.
                            </div>
                            <a className='outline-button biggest-text button-main' target="_blank" rel='noopener noreferrer' href='https://discord.gg/S7MGSV4'>Click to join the server!</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex vertical-flex center-vertical vertical-gap-small' id="norm-navel-section">
            <h3>About Norm Navel Bot</h3>
                <div className='bigger-text'>
                    Norm Navel bot is our custom solution to role assignment and server management on the UCR CompSci Discord server, and 2-time winner of "creepiest mascot of the UC system".
                </div>
            <div className='flex' id="norm-navel-info">
                    <a className='outline-button button-main' href="/documentation">View Command List</a>
                    <a className='outline-button button-secondary' target="_blank" rel='noopener noreferer' href='https://github.com/raymondwzeng/norm-navel-bot'>View Source</a>
            </div>
            </div>
        </main>

        <Footer/>

        <style jsx>
            {`
                main {
                    width: 100%;
                }

                .small-margin {
                    margin-bottom: 1rem;
                }

                .flex {
                    justify-content: center;
                    margin: 0 0;
                }

                .flex > div {
                    width: 80%;
                }

                #vignette {
                    margin: 0;
                    width: 100%;
                    opacity: 0.3;
                    background: linear-gradient(#000000, #5e5e5e);
                }

                #center-text {
                    width: 100%;
                    position: absolute;
                    margin-top: 10rem;
                    color: #ffffff;
                }

                #cover-all {
                    display: flex;
                    flex-grow: 10;
                    background-image: url("./Splash.png");
                    width: 100%;
                    overflow: hidden;
                }

                #norm-navel-section {
                    width: 100%;
                    background-color: #ffffff;
                }

                #norm-navel-info {
                    margin: 1rem 0;
                    width: 50%;
                    align-items: center;
                    justify-content: space-around;
                }

                #norm-navel-info > a {
                    margin-top: 0;
                }

                a {
                    margin-top: 1rem;
                }
            `}
        </style>
        </div>
        )
}