/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
function TodoItem({todoName,todoDate}){
    return <div className="container  mt-1 item-container">
    <div className="row">
      <div className="col-6">
        {todoName}
      </div>
      <div className="col-4">
        {todoDate}
      </div>
      <div className="col-2">
        <button className="btn btn-danger my-button">Delete</button>
        </div>
    </div>
    </div>
}
export default TodoItem;