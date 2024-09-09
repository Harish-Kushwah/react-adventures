import TodoItemsContext from "../store/todo-items-store"

import { useContext } from "react";
const WelcomeMessage = ()=>{
    const contextObj = useContext(TodoItemsContext);
    var items  = contextObj.items;
   
    return <>
        {items.length === 0 && <h4>Enjoy Your Day</h4>}        
    </>
}
export default WelcomeMessage;