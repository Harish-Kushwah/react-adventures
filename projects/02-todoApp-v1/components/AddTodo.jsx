import { MdAddchart } from "react-icons/md";

/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line react/prop-types
function AddTodo({addTodo,onInputChange,onDateInputChange}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter todo here" onChange={onInputChange}></input>
        </div>
        <div className="col-4">
          <input type="date" onChange={onDateInputChange}></input>
        </div>
        <div className="col-2">
        
          <button className="btn btn-success my-button" onClick={addTodo}><MdAddchart /></button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
