/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import TodoItem from "../components/TodoItem";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      {todoItems.map((item) => {
        <TodoItem key=""></TodoItem>;
      })}
    </>
  );
};
export default TodoItems;
