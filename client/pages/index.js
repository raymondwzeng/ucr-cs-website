import Head from 'next/head'
import Header from './components/header'
import Footer from './components/footer'

export default function Home() {
    return (
        <div className='container'>
        <Head>
            <title>UCR CS Discord</title>
        </Head>
        <Header/>
        <main>
            <div className='biggest-text bolder'>Welcome to CS @ UCR!</div>
            <div className='flex'>
                <div id="intro" className='bigger-text'>
                    CS @ UCR is a student/alumni-ran Discord community for CS, CEN, or EE majors, as well
                    as anyone interested in those topics studying at the University of California - Riverside.
                </div>
            </div>
            {/* TODO: Replace image with a non-norm one. */}
            <img src="https://pbs.twimg.com/profile_images/1111520908/Normthenavel_400x400.png"/>
            <div>
                <a className='outline-button bigger-text button-main' target="_blank" rel='noopener norefferrer' href='https://discord.gg/S7MGSV4'>Click to join the server!</a>
            </div>
            <div className='flex vertical-flex center-vertical vertical-gap-small' id="norm-navel-section">
            <h3>About Norm Navel Bot</h3>
                <div className='bigger-text'>
                    Norm Navel bot is our custom solution to role assignment and server management on the CS @ UCR Discord server, and 2-time winner of "creepiest mascot of the UC system".
                </div>
            <div className='flex' id="norm-navel-info">
                    <a className='outline-button button-main' href="/documentation">View Command List</a>
                    <a className='outline-button button-secondary' target="_blank" rel='noopener norefferer' href='https://github.com/raymondwzeng/norm-navel-bot'>View Source</a>
            </div>
            </div>
        </main>


        <Footer/>

        <style jsx>
            {`
                .flex {
                    justify-content: center;
                    margin: 0.5rem 0;
                }

                .flex > div {
                    width: 80%;
                }

                #norm-navel-section {
                    background-color: #C1C6C8;
                    border-radius: 10px;
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