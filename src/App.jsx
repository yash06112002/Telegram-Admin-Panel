import './App.css';
// import Sidebar from './Sidebar';
// import Chat from './Chat';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import { useStateValue } from './StateProvider';
import Panel from './components/Panel';

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <Panel />
      )}


    </div>
  );
}

export default App;