import React from 'react'

const Sum = ({numbers =[1,2,3,4]}) => {

  const result = numbers.reduce((sum, current)=>{
    return sum + current
})
  return (
    <div>
      <h1>{result}</h1>
    </div>
  )
}

export default Sum