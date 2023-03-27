import React, { useState } from 'react'

export const Login = () => {
  
  const [data, setdata] = useState({
    username :"", password: "", remember: false 

  })



  const handleInputChange = (event) => {
    const {name, type, value, checked} = event.target

    setdata((data) => {
        return {
            ...data,
            [name]: type === "checkbox" ? checked : value
        }
    })
}
    const handleReset=() =>{
        setdata((data) => {
          return{
            ...data,
            username:"",
            password:"",
            remember: false
          }})


    }
    const onLogin = () => {
      console.log(data.username, data.password, data.remember)
      setdata((data) => {
          return {
              ...data,
              username: "",
              password: "",
              remember: false
          }
      })
  }

    return<>
    <input
          type="text"
          name="username"
          value={data.username}
          onChange={handleInputChange}
        />
        <input 
          type="password"
          name="password"
          value={data.password}
          onChange={handleInputChange}
        />
        <input 
          type="checkbox"
          name="remember"
          checked={data.remember}
          onChange={handleInputChange}
        />
        <button 
          style={{'background-color': `${data.password.length < 8 ? 'red' : 'green'}`}}
          type="button"
          name="login"
          onClick={() => {
            onLogin(data);
          }}
          disabled={!data.username || data.password === ""}
        >
          login
        </button>
    <button onClick={handleReset}>reset</button>
    </>}