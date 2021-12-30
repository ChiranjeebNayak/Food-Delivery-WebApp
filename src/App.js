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
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/checkout" element={<Checkout/>}/>
      </Routes>
    </Router>
  );
}

export default App;
