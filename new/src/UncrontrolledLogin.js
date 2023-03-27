import React, { createRef } from "react";

class UncontrolledLogin extends React.Component{
    _formRef = createRef()
    handleFormSubmit = (event) => {
		event.preventDefault();

		const username = event.target.elements.username.value;
		const password = event.target.elements.password.value;
		const remember = event.target.elements.remember.checked;

		console.log({
			username,
			password,
			remember
		});
	};

    render(){
        return(
            <>
            <h2>uncontrolled login</h2>
            <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
                <input type="text" name="username" autoFocus />
                <input type="password" name="password" />
                <input type="checkbox" name="remember" />
                <button type="submit">login</button>
                <button type="reset">reset</button>
            </form>
            </>
        )
    }
}
export default UncontrolledLogin 