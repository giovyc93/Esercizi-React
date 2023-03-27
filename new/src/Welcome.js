import Age from "./Age"

import React from 'react'

export const Welcome = (props) => {
  return (
    <div>return (
      <div>
         <div className="welcome">
          <p> Welcome, {props.name} </p>
          {!!props.age &&
           props.age < 65 &&
            props.name === "John" && <Age age={props.age} />}
        </div>
        
      </div>
    )</div>
  )
}

