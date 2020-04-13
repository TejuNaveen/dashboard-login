import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
class Login extends Component {
    constructor(props) {
        super(props);
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
        const token = localStorage.getItem('token');
        if(token) {
            this.props.history.push('/dashboard')
        }
    }
    // submit() {
    //     console.log(this.usernameRef.current.value);
    //     console.log(this.passwordRef.current.value, this.props);
    //     this.props.history.push('/dashboard');
    // }
    render(){
        return(
            <div className="login">
                {/* <input type="text" placeholder="user name" name="username" ref={this.usernameRef}/>
                <input type="password" placeholder="password" name="password" ref={this.passwordRef}/>
                <button type="submit" onClick={this.submit.bind(this)}>submit</button> */}
                <GoogleLogin
                    clientId="813476275313-3surkf77o3lr3kj5bbd6m1pvql8hrku9.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess ={ (response)  =>{ 
                        console.log('res', response);
                        localStorage.setItem('token', response.tokenId)
                        this.props.history.push('/dashboard');
                    }}
                    onFailure={ () => {

                    }}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        )
    }
}

export default withRouter(Login);