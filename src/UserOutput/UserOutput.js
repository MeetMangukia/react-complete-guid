import React from 'react';
import "./UserOutput.css";

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.userName}</p>
            <p>Some Random Text!!</p>
            <p>This is the UserOutput File</p>
        </div>
    );
};

export default userOutput;