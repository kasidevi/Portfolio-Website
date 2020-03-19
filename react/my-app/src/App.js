import { CarList } from './components/CarsList/index.js';
import './components/CarsList/carlist.css';
import { TodoList } from './components/TodoList/todolist.js';
import './components/TodoList/todolist.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from "react-router-dom";

export default function App() {
  return (
    <Router> 
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/CarsList">CarList</Link>
            </li>
            
            <li>
              <Link to="/TodoList">todolist</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
         <Switch>
          <Route path="/CarsList">
            <CarList />
          </Route>
          
          <Route path="/TodoList">
            <TodoList />
          </Route>
        </Switch>
     
      </div>
    </Router>
  );
}
