import React from "react";

function HW() {
    const firstName = 'Teddy'
    const lastName = 'Hidalgo'

    return (
        <div className="HW">
            {/* Signals JavaScript usage with {} */}
            <h1>Hello {firstName + " " + lastName}</h1>

            {/* ES6 String Templating Syntax? */}
            <h1>Hello {`${firstName} ${lastName}`}!</h1>

            {/* <h1>Hello World!</h1> */}
        </div>
    );
}

export default HW;