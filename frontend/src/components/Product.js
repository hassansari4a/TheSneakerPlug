import React from 'react'
import {Link} from 'react-router-dom'

import Rating from './Rating'

export default function Product(props) {
  return (
    <div key={props.product._id} className="card">
      <Link to={`/product/${props.product._id}`}>
        <img className="medium" src={props.product.image} alt={props.product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${props.product._id}`}>
          <h2>{props.product.name}</h2>
        </Link>
        <Rating rating={props.product.rating} />

        <div className="price">Rs. {props.product.price}</div>
      </div>
    </div>
  )
}