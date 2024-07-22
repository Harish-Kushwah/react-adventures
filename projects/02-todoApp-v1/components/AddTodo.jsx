/* eslint-disable react/no-unknown-property */
function AddTodo(){
    return <div class="container  ">
    <div class="row">
       <div class="col-6">
         <input type="text"  placeholder="Enter todo here"></input>
       </div>
       <div class="col-4">
         <input type="date"></input>
       </div>
       <div class="col-2">
         <button class="btn btn-success my-button">Add</button>
         </div>
     </div>
     </div>

}
export default AddTodo;
