import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Signin from './pages/signin'
import Signup from './pages/signup'
import Checkout from './pages/checkout'
import Home from './pages/home'
import Restaurant from './pages/restaurants'
import Menu from './pages/menu'
import Testing from './pages/testing'
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/home" element={<Menu/>} />
        <Route exact path="/checkout" element={<Checkout/>}/>
        <Route  path ="/restaurants" element={<Restaurant/>}/>
        <Route  path ="/testing" element={<Testing/>}/>
      </Routes>
    </Router>
  );
}

export default App;
