import logo from "./logo.svg";
import "./App.css";
import Item from "./components/Item";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <h1>Cart - context</h1>
      <Item name="Iphone 14" price={999} />
      <Item name="Oneplus Nord" price={451} />
      <Item name="Xiomi 10 Pro" price={340} />
      <Item name="Oppo Vivo" price={741} />
      <Cart />
    </div>
  );
}

export default App;
