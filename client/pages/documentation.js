import Head from 'next/head'
import Card from './components/card'
import Footer from './components/footer'
import Header from './components/header'
import { useState } from 'react'

let commands = {
    Command1: "This is a test command 1",
    Command2: "This is a test command 2",
    Command3: "This is a test command 3"
}

var commandJSX = []

function populateCommandJSX() {
    commandJSX = []
    for(const [key, value] of Object.entries(commands)) {
        commandJSX.push(<Card key={key} name={key} description={value}/>)
    }
}

function matches(element, value) {
    return element.props.name.toLowerCase().indexOf(value) > -1;
}

populateCommandJSX()

export default function Documentation() {
    const [value, setValue] = useState("")

    function updateSearch(event) {
        setValue(event.target.value.toLowerCase())
    }

    return (
        <div className='container'>
            <Head>
                <title>UCR CS Discord</title>
            </Head>
            <Header/>
            <main>
                <input id="commandInput" type="text" placeholder="Search for a specific command..." onInput={updateSearch}></input>
                <div className="flex vertical-flex" id='command-list'>
                    {commandJSX.filter((element) => matches(element, value))}
                </div>
            </main>
            <Footer/>

            <style jsx>
                {`
                    main {
                        width: 90%;
                        justify-content: start;
                    }

                    input {
                        margin-top: 1rem;
                        padding: 0.3rem 0;
                        width: 80%;
                        border-radius: 7px;
                        border: 1px solid #c4c4c4;
                    }

                    #command-list {
                        width: 85%;
                    }
                `}
            </style>
        </div>
    )
}