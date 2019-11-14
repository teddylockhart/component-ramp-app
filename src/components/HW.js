import React from "react";

function HW() {
    const firstName = 'Teddy'
    const lastName = 'Hidalgo'
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours <12) {
        timeOfDay = 'morning'
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = 'afternoon'
    } else if (hours > 17 && hours < 23) {
        timeOfDay = 'evening'
    } else {
        timeOfDay = 'night'
    }

    return (
        <div className="HW">
            {/* Signals JavaScript usage with {} */}
            <h1>Hello {firstName + " " + lastName}</h1>

            {/* ES6 String Templating Syntax? */}
            <h1>Hello {`${firstName} ${lastName}`}!</h1>
            <h2>Good {`${timeOfDay}`}!</h2>

            {/* <h1>Hello World!</h1> */}
        </div>
    );
}

export default HW;