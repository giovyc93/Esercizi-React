import React, { useState, useEffect } from 'react'


const ClickCounter = (props, {value = 0}) => {

  let [clickCount, setClickCount] = useState(value)

  
  const countEvents= () => {
    setClickCount(clickCount += 1)
}
useEffect(() => {
  props.onCounterChange(clickCount)
},[clickCount, props])

 



  return (
    <div>
     
        <h2>click: {clickCount}</h2>
        <button onClick={countEvents}>+</button>
    
   
    </div>
  )
}

export default ClickCounter