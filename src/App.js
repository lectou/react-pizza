import React from 'react';
import { Route } from 'react-router-dom';

import { Header } from './components';
import { Home, Basket } from './pages';

function App() {

  return (
    <div className="app">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/basket" component={Basket} exact />
      </div>
    </div>
  );
}

export default App;
