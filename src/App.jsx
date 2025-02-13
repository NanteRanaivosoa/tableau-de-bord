import React, { useState } from "react";
import "./App.css";

function App() {

  const [products, setProducts] = useState([
    //Declaration d'un tableau d'objets
    { id: 1, name: "Produit A", price: 100 },
    { id: 2, name: "Produit B", price: 150 },
    { id: 3, name: "Produit C", price: 200 },
    { id: 4, name: "Produit D", price: 350 },
  ]);


  const deleteProduct = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
  }



  return (
    <div id="container">
      <h1>Tableau de Bord de produits</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price} $
            <button onClick={() => deleteProduct(product.id)}>Supprimer

            </button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App;
