/* eslint-disable react/prop-types */
import styles from "./Item.module.css";
const Item = (props) => {
  return (
    <>
      <li key={props.foodItem} className={ ` ${styles.item}  list-group-item `} >
       <span className={styles['item-span']}> {props.foodItem} </span>
      </li>
    </>
  );
};
export default Item;
