import logo from './logo.svg';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Pres from './components/Pres';
import Login from './components/Login';
import { Provider } from "react-redux"
import Store from './redux/store';

function App() {

const { user , loginWithRedirect} = useAuth0();

console.log("current user",user);

  return (
    <Provider store={Store}>
      <Router>
        <Routes>
          <Route element={<Login/>} path={"/login"}/>
          <Route element={<About/>} path={"/"}/>
          <Route element={<Pres/>} path={"/pres"}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
