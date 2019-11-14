import React from "react";

function HW() {
    const firstName = 'Teddy'
    const lastName = 'Hidalgo'
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay


    const styles = {
        // color: '#FF8C00',
        // backgroundColor: '#FF2D00',
        // font-size is fontSize and it automatically defaults numbers to pixels.
        // if pixel or other unit is used, must be ''
        fontSize: '40px'
    }

    if (hours <12) {
        timeOfDay = 'morning'
        styles.color = '#04756F'
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'afternoon'
        styles.color = '#8914A3'
    } else if (hours > 17 && hours < 23) {
        timeOfDay = 'evening'
        styles.color = '#D90000'
    } else {
        timeOfDay = 'night'
    }

    return (
        <div className="HW">
            {/* Signals JavaScript usage with {} */}
            <h1>Hello {firstName + " " + lastName}</h1>

            {/* ES6 String Templating Syntax? */}
            {/* Added styles object for in-line styling */}
            <h1>Hello {`${firstName} ${lastName}`}!</h1>
            <h2 style={styles}>Good {`${timeOfDay}`}!</h2>

            {/* <h1>Hello World!</h1> */}
        </div>
    );
}

export default HW;