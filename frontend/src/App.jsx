import { useState } from 'react'
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navigation from './components/Navigation'
import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'

function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
        <Routes>
          <Route path="/" Component={NotesList} /> 
          <Route path="/edit/:id" Component={CreateNote} />
          <Route path="/create" Component={CreateNote} />
          <Route path="/user" Component={CreateUser} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
