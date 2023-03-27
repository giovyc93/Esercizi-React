import React from "react";
class Login extends React.Component{
    state = {username :"", password: "", remember: false };


    handleInputChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        const checked = event.target.checked;
        const type = event.target.type;

        this.setState({ [name]: type === 'checkbox' ? checked : value });


    };
    handleReset=() =>{
        this.setState({
            username:"",
            password:"",
            remember: false
        })


    }
 

    
render(){
    return<>
    <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
        <input 
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
        <input 
          type="checkbox"
          name="remember"
          checked={this.state.remember}
          onChange={this.handleInputChange}
        />
        <button 
          style={{'background-color': `${this.state.password.length < 8 ? 'red' : 'green'}`}}
          type="button"
          name="login"
          onClick={() => {
            this.props.onLogin(this.state);
          }}
          disabled={!this.state.username || this.state.password === ""}
        >
          login
        </button>
    <button onClick={this.handleReset}>reset</button>
    </>
}
}
export default Login;