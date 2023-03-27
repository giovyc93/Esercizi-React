
import React from 'react'

const Sum = (props) => {

  const result = props.numbers.reduce((sum, current) => sum + current)
  
  return (
    <div>
      <h1>{result}</h1>
    </div>
  )
}

export default Sum