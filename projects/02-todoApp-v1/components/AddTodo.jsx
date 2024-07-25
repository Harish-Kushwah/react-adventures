/* eslint-disable react/no-unknown-property */
function AddTodo() {
  return (
    <div className="container  ">
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter todo here"></input>
        </div>
        <div className="col-4">
          <input type="date"></input>
        </div>
        <div className="col-2">
          <button className="btn btn-success my-button">Add</button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
