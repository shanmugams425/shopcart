
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from './Card'
import CartItems from "./Cartitems";
import { useState } from "react";
import Navbar from './Navbar';


function App() {
  let products = [
    {
      id : 1,
      title: "iPhone",
      description: "This is a good product",
      price: 100000,
    },
    {
      id : 2,
      title: "Samsung",
      description: "This is a good product",
      price: 20000,
    },
    {
      id : 3,
      title: "iPad",
      description: "This is a good product",
      price: 250000,
    },
    {
      id : 4,
      title: "Air Pod",
      description: "This is a good product",
      price: 3000,
    },
    {
      id : 5,
      title: "One Plus",
      description: "This is a good product",
      price: 700000,
    },
    {
      id : 6,
      title: "Galexy A",
      description: "This is a good product",
      price: 50000,
    }
  ];

  const [cartitems,setCartItems] = useState([])
  const [total,setTotal] = useState(0)

  let handleCart = (item) => {
    setCartItems([...cartitems,item]);
    setTotal(total + item.price);
  }

  let handleRemoveCart = (item) => {
    // let itemIndex = cartitems.findIndex((obj) => {
    //   return item.id === obj.id
    // });

    let itemIndex = cartitems.findIndex(obj => item.id === obj.id);
    cartitems.splice(itemIndex,1)
    setCartItems([...cartitems])
    setTotal(total - item.price)
  }

  

  return (
    <div ><Navbar/>

    <div className="container">
      <div className="row">
        <div className="col-lg-10">
          <div className="row">
            
            {products.map((product) => {
              return <Card product={product} handleCart={handleCart} />;
            })}
          </div>
        </div>
        <div className="col-lg-2">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1>Cart</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <ol class="list-group list-group-numbered">
                {
                  cartitems.map((item) => {
                      return <CartItems item={item} handleRemoveCart={handleRemoveCart}/>
                  })
                }
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1>Total : {total}</h1>
            </div>
          </div>
         </div>
      </div>
    </div>
    <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright © Your Website 2022</p></div>
        </footer>
    </div>
  );
}

export default App;


