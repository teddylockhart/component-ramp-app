import React from 'react'

function Joke(props) {
    return(
        <div className='joke'>
            <p>{props.joke.question}</p>
            <p>{props.joke.punchLine}</p>
        </div>
    )
}

export default Joke