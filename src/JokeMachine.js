import React from 'react'
import Joke from './components/Joke'

function JokeMachine() {
    return(
        <div>
            <Joke
                joke={{
                    question:'Hello', 
                    punchLine:'World'
                }}
            />
            <Joke
                joke={{
                    question:'Hello', 
                    punchLine:'World'
                }}
            />
            <Joke
                joke={{
                    question:'Hello', 
                    punchLine:'World'
                }}
            />
            <Joke
                joke={{
                    question:'Hello', 
                    punchLine:'World'
                }}
            />
            <Joke
                joke={{
                    question:'Hello', 
                    punchLine:'World'
                }}
            />
        </div>
    )
}

export default JokeMachine