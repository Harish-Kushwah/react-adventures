import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
function App() {
  let items = ["apple", "Mango", "Banana", "cherry","pineapple"];

  return (
    <>
      <h1>Fruits List</h1>
      <ErrorMessage items={items}></ErrorMessage>
       <FoodItems items={items}></FoodItems>
    </>
  );
}

export default App;
