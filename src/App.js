import React from 'react';
import './App.scss';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
     <div className="App">
      <Router>
         <Nav />
         <Switch>
           <Route exact path="/">
              <Home />
           </Route>
           <Route exact path="/about">
              <About />
           </Route>
           <Route exact path="/shop">
              <Shop />
           </Route>
         </Switch>
      </Router>
      </div>    
  );
}

export default App;
