import './App.css';
import Home from './components/Home';
import NavBar from './components/Nav';
import Favorites from './components/Favorites';
import React from 'react';
import {Route} from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
     <NavBar/>
     <Route path='/favorites' component={Favorites}/>
     <Route exact path='/' component={Home}/>
    </div>
  );
}

export default App;
