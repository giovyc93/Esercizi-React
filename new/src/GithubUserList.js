import React, { useEffect, useState } from 'react'
import GithubUser from './GithubUser'
import { Link, Outlet } from "react-router-dom"

const GithubUserList = () => {
    const [input, setInput] = useState('')
    const [list, setList] = useState([])

    function handleInputChange(event) {
        const value = event.target.value
        setInput(value)
    }

    function handleButton() {
        setList([...list, input])
    }
    useEffect(() => {
        console.log(list)
    }, [list])

  return (
    <div>
          <label>
                github user:
                <input name="input" value={input} onChange={handleInputChange} />
            </label>
         <button onClick={handleButton}>search</button>
            <div>
            {list.map((user, index) => (
                     <>
                     <Link to={user} key={index} user={user}>{user}</Link>
                     <Outlet />
                 </>
                ))}
            </div>
      
    </div>
  )
}

export default GithubUserList