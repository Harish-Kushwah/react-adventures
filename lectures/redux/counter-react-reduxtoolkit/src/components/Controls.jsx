import { useRef } from "react";
import { counterActions } from "../store";
import { useDispatch } from "react-redux";
const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handleAdd = () => {
    dispatch(counterActions.add(
      { num: inputElement.current.value }
    ));
    inputElement.current.value ="";
  };
  const handleSubtarct = () => {
    dispatch(counterActions.subtract(
      { num: inputElement.current.value }
    ));
    inputElement.current.value ="";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center bottom-controls">
        <input
          type="text"
          placeholder="Enter number"
          className="number-input"
          ref={inputElement}
        />
        <button type="button" className="btn btn-primary" onClick={handleAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtarct}
        >
          Subtract
        </button>
      </div>
    </>
  );
};
export default Controls;
