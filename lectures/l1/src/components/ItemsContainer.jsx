import style from "./ItemContainer.module.css"
import Item from "./Item";
import FoodInput from "./FoodInput";
import { useState } from "react";

const ItemContainer = ()=>{

    let textArr = useState(""); //returns array [current_value,function_for_edit]
    let textToShow = textArr[0];
    let setTextState = textArr[1];

    console.log(textToShow);


    const handleOnChange = (event)=>{
        setTextState(event.target.value);
    }

    let newFoodItemName = useState(["Apple","Mango","Banana"]);
    let [items,setAllItems] = newFoodItemName;

    const addFoodItem = ()=>{
        let newItems = [...items,textToShow];
        setAllItems(newItems);
    }
    const buyProduct = (event)=>{
        // ()=>{console.log(`${item} bought`)}
        // if(event.target.textContent==="Buy"){

        // }
        console.log(event)
        event.target.className=style.active;

    }
    return <>
    <div className={style.Container}>
            <div className={style.title}>
                <h1>Food Details</h1>
            </div>
            <FoodInput handleOnChange={handleOnChange} addFoodItem={addFoodItem}></FoodInput>
            <div className={style.itemList}>     
            {
                  items.map((item ) => (<Item foodName={item} bought={true} buyProduct={buyProduct} key=""></Item> ))
            }
            </div>
        </div>
    </>
}

export default ItemContainer;