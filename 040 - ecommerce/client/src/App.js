import React from 'react';
import List from './components/List';
import AddPage from './components/Add';
import DetailPage from './components/Detail';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="container" style={{ padding: '20px' }}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={Add} />
        <Route path="/detail" component={Detail} />
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Link to="/add">
        <button type="button" className="btn btn-primary" href="/add">
          Add Ads
        </button>
      </Link>
      <br />
      <br />
      <List />
    </div>
  );
}

function Add() {
  return <AddPage />;
}

function Detail() {
  return <DetailPage />;
}

export default App;
