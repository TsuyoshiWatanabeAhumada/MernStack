import { useState } from 'react'
import {  BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navigation from './components/Navigation'
import NotesList from './components/NotesList'
import CreateNote from './components/CreateNote'
import CreateUser from './components/CreateUser'

function App() {

  const Auxroute = () => <CreateNote params={useParams()}/>

  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
        <Routes>
          <Route path="/" Component={NotesList} /> 
          <Route path="/edit/:id" Component={Auxroute} />
          <Route path="/create" Component={CreateNote} />
          <Route path="/user" Component={CreateUser} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
