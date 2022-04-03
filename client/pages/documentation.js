import Card from './components/card'
import Footer from './components/footer'
import Header from './components/header'
import { useState } from 'react'

let commands = {
    "/createrole roleName categoryName" : "Create a new role for the server with the specified roleName and categoryName",
    "/deleterole roleName" : "Delete the role with the specified roleName",
    "/editrole currentRoleName newRoleName" : "Change the name of an existing role.",
    "/roles" : "View all of the role categories",
    "/roles category" : "View all of the roles for a single category",
    "/assignrole role" : "Assign yourself a role",
    "/unassignrole role" : "Unassign yourself a role",
    "/linkserver role discordLink" : "Link a class role with a discord server for that class",
    "/unlinkserver role" : "Unlink all servers from a class role",
    "/nukeserver" : "Unlink all servers from all class roles"
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