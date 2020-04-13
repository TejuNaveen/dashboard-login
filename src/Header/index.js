import React, {Component} from 'react';
import Logo from '../Img/logo.png';
import './style.css';
import { GoogleLogout } from 'react-google-login';
import Login from '../Login';
import { withRouter } from 'react-router-dom';


class Header extends Component{

    
    render(){
        return(
            <div className='header-bar'>
                <img src={Logo} className="img-dim"/>
                <GoogleLogout
                clientId="813476275313-3surkf77o3lr3kj5bbd6m1pvql8hrku9.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={() => {
                    console.log('logout');
                    localStorage.removeItem('token')
                    this.props.history.push('/login')
                }}
                onFailure={(err) => {
                    console.log('logout failed', err)
                }}
                >
                </GoogleLogout>
            </div>
        )
    }
}

export default withRouter(Header);