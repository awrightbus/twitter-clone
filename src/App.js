import React from 'react';
import './App.css';
import Sidebar from './Sidebar.js'
import Feed from './Feed.js'
import Widget from './Widget.js'


function App() {
  return (
    <div className="app">
      <Sidebar />
      
      <Feed />

      <Widget />

    </div>
  );
}

export default App;
