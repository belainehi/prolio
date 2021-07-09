import React from 'react';
import './App.css';
import Login from '../Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Dashboard from '../Dashboard/Dashboard';
import PrivateRoute from "../Login/PrivateRoute";
import Signup from "../Login/Signup";
import ForgotPassword from "../Login/ForgotPassword";
import UpdateProfile from '../Preferences/UpdateProfile';
import { AuthProvider } from '../../contexts/AuthContext';
import Profile from '../Profile/Profile';


function App() {
return (
  <Container>
  <div className="wrapper">
    <h1>Prolio</h1>
    <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <PrivateRoute path="/profile" component={Profile} />
			        <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
  </div>
    </Container>
  )
}

export default App;

/*
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';

function App() {
  return (
	    <div className="wrapper">
	      <h1>Application</h1>
	      <BrowserRouter>
	        <Switch>
       		  <Route path="/dashboard">
	            <Dashboard />
	          </Route>
	          <Route path="/preferences">
	            <Preferences />
	          </Route>
	        </Switch>
	      </BrowserRouter>
	    </div>
	  );
}

export default App;
*/
