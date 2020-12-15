import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/home-page.component';

const Groceries = () => (
  <div>
    <h1>Groceries </h1>
  </div>
);

function App() {
  return(
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/groceries' component={Groceries} />
      </Switch>
    </div>
  );
}

export default App;
