import './App.css';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Book from './components/Book/Book';
import Login from './components/Login/Login';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import Bookings from './components/Bookings/Bookings';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({name: '', email: ''});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivetRoute exact path="/book">
            <Bookings/>
          </PrivetRoute>
          <PrivetRoute path="/book/:type">
            <Book/>
          </PrivetRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="*">
            <h1 className="text-center">404 Page Not Found</h1>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;