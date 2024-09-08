/* eslint-disable react/no-unknown-property */

import { useState } from "react";
import AddTodo from "../components/AddTodo";
import AppName from "../components/AppName";
import TodoItem from "../components/TodoItem";
import "./App.css";

function App() {

  var [inputText,setInputText]=useState();
  var [dateInput,setDateInput]=useState();
  var [items,setItems] = useState([]);

  const addTodo = ()=>{
      let newList = [...items,[inputText,dateInput]]
      setItems(newList);
      setInputText("");
      setDateInput("");
  }
  const onInputChange = (event)=>{
    inputText = event.target.value;
    setInputText(inputText);
  }
  const onDateChange = (event)=>{
    console.log(event);    
    dateInput = event.target.value;
    setDateInput(dateInput);
  }
  const removeTodo =(event)=>{
    let elementId = event.target.id
    items = items.filter(item => item[0] !== elementId)
    setItems(items)
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo addTodo={addTodo} onInputChange={onInputChange} onDateInputChange={onDateChange} />
      
       {
        items.map((item)=>(<TodoItem todoName={item[0]} todoDate={item[1]} key={item[0]} removeTodo={removeTodo}></TodoItem>))
       }
     
    </center>
  );
}

export default App;
