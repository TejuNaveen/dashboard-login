import React from 'react';
import Login from './Login'
import Dashboard from './Dashboard';
import Report from './Report/Report';
import Home from './Home/Home';
import Activities from './Components/Activities';
import AboutUs from './Components/AboutUs';
import Carrers from './Components/Carrers';
import ContactUs from './Components/ContactUs';
import Register from './Components/Register';
import Store from './Redux/Store';

import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
const PrivateRoute =(props) => {
  const token = localStorage.getItem('token');
  if(token) {
    return <Route {...props}/>
  } else {
    return <Redirect to="/login"/>
  }
}

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/"> 
          <Home>
            <PrivateRoute path='/report'><Report/></PrivateRoute>
            <PrivateRoute path="/dashboard"><Dashboard /></PrivateRoute>
            <Route path='/Activities' component={Activities} />
            <Route path='/AboutUs' component={AboutUs}/>
            <Route path='/Carrers' component={Carrers}/>
            <Route path='/ContactUs' component={ContactUs}/>
            <Route path='/Register' component={Register}/>
          </Home>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
