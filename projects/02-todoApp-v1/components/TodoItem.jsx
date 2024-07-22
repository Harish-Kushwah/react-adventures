/* eslint-disable react/no-unknown-property */
function TodoItem(){

    let todoName = "Buy Milk";
    let todoDate = "10/10/2024";

    return <div className="container  mt-1 item-container">
    <div className="row">
      <div class="col-6">
        {todoName}
      </div>
      <div class="col-4">
        {todoDate}
      </div>
      <div class="col-2">
        <button class="btn btn-danger my-button">Delete</button>
        </div>
    </div>
    </div>
}
export default TodoItem;