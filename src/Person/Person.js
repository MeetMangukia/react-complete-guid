import React from 'react'
import classes from "./Person.css"

const person = (props) => {

    return (
        <div className={classes.Person}>
            <h2 onClick={ props.click }>Hello, I'm { props.name } and { props.age } years old!!</h2>
            <h3>{ props.children }</h3>
            <input type="text" onChange={props.changed} value={props.name} />    
        </div>
    );
}

export default person;