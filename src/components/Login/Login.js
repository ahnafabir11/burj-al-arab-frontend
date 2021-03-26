import './Login.css';
import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

function Login() {
  const [, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = ()=> {
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
      .then((res) => {
        const {displayName, email} = res.user;
        const signedInUser = {name: displayName, email: email}
        setLoggedInUser(signedInUser);
        storeAuthToken();
        history.replace(from);
      }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  const storeAuthToken = ()=>{
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    .then((idToken)=> {
      sessionStorage.setItem('token', idToken)
    })
    .catch((error)=> {
      // Handle error
    });
  }

  return (
    <div className="Login">
      <h1>This is login page</h1>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  )
}

export default Login;