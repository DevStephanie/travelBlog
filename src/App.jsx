import React from 'react';
import { BrowserRouter as Router, Route,  Routes, BrowserRouter} from "react-router-dom";
import './App.css';
import travelBlog from "./pages/travelBlog/TravelBlog";
import Main from "./pages/Main/Main";

const App =() => {
  return (
    <div className='container'>
    <Router> 
    <Routes>
      <Route path="/" exact Component={Main}/>
      <Route path="/travelBlog/: id" Component={travelBlog}/>
      <Redirect to='/'/>
      </Routes>
      </Router>
    </div>
  );
}

export default App.jsx;
