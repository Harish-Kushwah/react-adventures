import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  let items = ["apple", "Mango", "Banana","cherry"];
  return (
    <>
      <h1>Fruits List</h1>
      <ul className="list-group">
        {items.map((item )=> (
          <li key="" className="list-group-item">{item}</li>
      ))}
        
      
      </ul>
    </>
  );
}

export default App;
