import TodoItemsContext from "../store/todo-items-store"
import { useContext } from "react";
import { MdAddchart } from "react-icons/md";
import { useRef } from "react";
/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line react/prop-types
function AddTodo() {

  const contextObj = useContext(TodoItemsContext);
  const setTodoItems = contextObj.setTodoItems;


  const onInputDateRef = useRef("");
  const onInputRef = useRef("");
  const addTodo = (event)=>{
      event.preventDefault();
      var inputText = onInputRef.current.value;
      var dateInput = onInputDateRef.current.value;
      setTodoItems((items)=>[...items,[inputText,dateInput]]);
      onInputRef.current.value="";
      onInputDateRef.current.value="";
  }

  return (
    <div className="container">
      <form className="row"  onSubmit={addTodo}>
        <div className="col-6">
          <input type="text" placeholder="Enter todo here"  ref={onInputRef}></input>
        </div>
        <div className="col-4">
          <input type="date" ref={onInputDateRef}></input>
        </div>
        <div className="col-2">
        
          <button type="submit" className="btn btn-success my-button" 
         
          // onClick={addTodo}
          ><MdAddchart /></button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
