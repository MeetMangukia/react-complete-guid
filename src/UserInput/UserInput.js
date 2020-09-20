import React from 'react';

// ES6 Arrow Function
const  userInput = (props) => {

    const style = {
        border: "2px solid red"
    };

    return <input type="text" 
    onChange={props.changed}
    style = {style}
    value={props.currentName} />;
};

export default userInput;