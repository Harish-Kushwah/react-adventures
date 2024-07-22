/* eslint-disable react/no-unknown-property */

import AddTodo from "../components/AddTodo";
import AppName from "../components/AppName";
import TodoItem from "../components/TodoItem";
import "./App.css"

function App() {

  return <center className='todo-container'>
    <AppName/>
    <AddTodo/>
    <TodoItem></TodoItem>
    <TodoItem></TodoItem>

    </center>;
  
}

export default App
