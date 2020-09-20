import React from 'react'
import "./Person.css"
import Radium from 'radium'

const person = (props) => {

    const style = {
        "@media (min-width: 500px)": {
                width: "450px"
        }
    }

    return (
        <div className="Person" style={style}>
            <h2 onClick={ props.click }>Hello, I'm { props.name } and { props.age } years old!!</h2>
            <h3>{ props.children }</h3>
            <input type="text" onChange={props.changed} value={props.name} />    
        </div>
    );
}

export default Radium(person);