import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MassageBox from '../components/MessageBox';
import Rating from '../components/Rating';

export default function ProductScreen(props) {
  const dispatch = useDispatch()
  const productId = props.match.params.id
  const [qty, setQty] = useState(1)
  const productDetails = useSelector( (state)=> state.productDetails)
  const {loading,error,product} = productDetails;

  useEffect(()=> {
    dispatch(detailsProduct(productId))
  }, [dispatch, productId])

  const addToCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`)
  }

  const options = [1,2,3,4,5,6,7,8,9,10];

  return (
    <div>
      {loading? <LoadingBox /> : error ? <MassageBox variant="danger">{error}</MassageBox> :
      <div>
        <Link to="/">Back to results</Link>
        <div className="row top">
          <div className="col-2 proimage">
            <img className="product-image" src= {product.image} alt={product.name}></img>
          </div>
          <div className="col-1">
            <ul>
              <li><h1>{product.name}</h1></li>
              <li><Rating rating={product.rating} /></li>
              <li>Price: Rs. {product.price}</li>
              <li>Description: <p>{product.description}</p></li>
            </ul>
          </div>
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <div className="row">
                    <div>Price</div>
                    <div className="price">Rs. {product.price}</div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div>Quantity: </div>
                    <div>
                      <select value={qty} onChange={e => setQty(e.target.value)}>
                        {
                          options.map((value) =>{
                            return <option key={value} value={value}>{value}</option>
                          })
                        }
                      </select>
                    </div>
                  </div>
                </li>
                <li>
                  <button className="primary block" onClick={addToCartHandler}>
                    Add to Cart
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}