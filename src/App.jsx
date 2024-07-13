import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <div className="main-container">
        <div className="cards-container">
          {products.map((product) => (
            <Card></Card>
          ))}
        </div>
        <div className="cart-container">
          <h1>This is cart</h1>
        </div>
      </div>
    </>
  );
}

export default App;
