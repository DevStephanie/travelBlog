import React from 'react';
import { Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import travelBlog from "./pages/travelBlog";
import Main from "./pages/Main";

const MyAp =() => {
  return (
    <div className='container'>
    <Switch>
      <Route path="/" exact Component={Main}/>
      <Route path="/travelBlog/: id" Component={travelBlog}/>
      <Redirect to='/'/>
      </Switch>
    </div>
  );
}


