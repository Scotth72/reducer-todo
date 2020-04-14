import React from 'react';
import './App.css';
import {initialState, Reducer} from './reducers/reducer';
import Form from './components/ToDoList';

function App() {

  return (
    <div className="App">
      <h1>To Do List</h1>
      <Form/>


    </div>
  );
}

export default App;

