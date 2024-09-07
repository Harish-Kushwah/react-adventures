import style from "./FoodInput.module.css"
// eslint-disable-next-line react/prop-types
const FoodInput = ({handleOnChange,addFoodItem})=>{

   
    return<>
        <div className={style.InputContainer}>
        <input type="text" id={style.input} 
        placeholder="Enter Something"
        onChange={handleOnChange}
        />
        <button id={style.search} onClick={addFoodItem}>Add</button>
        </div>
    </>
}
export default FoodInput;