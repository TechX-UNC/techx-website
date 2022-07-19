import React, { Component } from 'react'
import Form from './Form'
import Table from './Table'

class App extends React.Component {
    state = {
        characters: [
            {
                name: "Charlie",
                job: "Janitor",
            },
            {
                name: "Mac",
                job: "Bouncer",
            },
            {
                name: "Dee",
                job: "Aspiring Actress"
            },
            {
                name: "Dennis",
                job: "Bartender",
            }
        ],
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
    }

    removeCharacter = (index) => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }


    render() {
        
        return (
            <div className="container">
                <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default App