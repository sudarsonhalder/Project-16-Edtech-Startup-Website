import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Switch,Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Liveclasses from './Liveclasses';
import Videolibrary from './Videolibrary';
import Course from './Course';
import Book from './Book';
import Board from './Board';
import Exam from './Exam';
const App=()=>{
    return(
    <>
    <Navbar/>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/Liveclasses' component={Liveclasses}/>
        <Route exact path='/Videolibrary' component={Videolibrary}/>
        <Route exact path='/Course' component={Course}/>
        <Route exact path='/Book' component={Book}/>
        <Route exact path='/Board' component={Board}/>
        <Route exact path='/Exam' component={Exam}/>
        <Redirect to='/' />
    </Switch>
    </>
    );
};

export default App;