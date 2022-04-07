import React from 'react'

function Card(props) {
  return (
    <div className="col-lg-4 mb-3">
    <div class="card" >
      <img src="https://picsum.photos/200/150" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{props.product.title}</h5>
        <p class="card-text">
            {props.product.description}
                </p>
        <p>
          Price : Rs {props.product.price}
        </p>
        <button onClick={() => props.handleCart(props.product)} class="btn btn-primary">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  )
}

export default Card