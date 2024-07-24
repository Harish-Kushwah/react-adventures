/* eslint-disable react/prop-types */
import Item from"./Item";

const FoodItems = (props) => {
  let items = props.items;
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          
          <Item key={item} foodItem={item}></Item>
        
        ))}
      </ul>
    </>
  );
};
export default FoodItems;
