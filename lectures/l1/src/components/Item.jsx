import style from "./Item.module.css";

// eslint-disable-next-line react/prop-types
const Item = ({foodName,bought,buyProduct})=>{
    console.log(bought)
    return <>
        <div className={`${style["Item"]} ${bought && style["active"]}}`} >
            <p>{foodName}</p>
            <div className={style.Btn}>
                <button id={style.buy} onClick={buyProduct} className={`${bought && style["active"]}}`} >Buy</button>
                <button id={style.view} >View</button>
            </div>
        </div>
    </>
}   

export default Item;