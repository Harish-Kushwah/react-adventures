import TodoItemsContext from "../store/todo-items-store"

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import { useContext } from "react";

const TodoItems = () => {


  const contextObj = useContext(TodoItemsContext);
  var items  = contextObj.items;
  var removeTodo = contextObj.removeTodo;
  return (<>
      {
        (items.length >0) &&  items.map((item)=>(<TodoItem todoName={item[0]} todoDate={item[1]} key={item[0]} removeTodo={removeTodo}></TodoItem>))
      }
     </>
  );
};
export default TodoItems;
