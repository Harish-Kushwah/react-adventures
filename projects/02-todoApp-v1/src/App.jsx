/* eslint-disable react/no-unknown-property */

import {  useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItemsContext from "./store/todo-items-store"
import WelcomeMessage from "./components/WelcomeMessage"
import "./App.css";
import TodoItems from "./components/TodoItems";
// pure function
// const todoItemsReducer = (action)=>{
//   return [];
// }
function App() {
 
  const [items,setTodoItems] = useState([]);
  // const [newTodoItems,dispatchTodoItems] = useReducer(todoItemsReducer,[]);

  const removeTodo =(event)=>{
    let elementId = event.target.id
    var newItems = items.filter(item => item[0] !== elementId)
    setTodoItems(newItems)
  }




  return (
    <TodoItemsContext.Provider value={{
              items:items,
              setTodoItems:setTodoItems,
              removeTodo:removeTodo,
            }
      }>
    <center className="todo-container">
      <AppName/>
      <AddTodo/>
      <WelcomeMessage/>
      <TodoItems></TodoItems>
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
