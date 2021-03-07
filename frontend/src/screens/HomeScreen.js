import React, { useEffect} from 'react'

import Product from '../components/Product'
import LoadingBox from '../components/LoadingBox'
import MeassageBox from '../components/MessageBox'
import {useDispatch, useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions'

export default function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector ( (state) => state.productList)
  const { loading, products, error} = productList;

  useEffect(()=>{
    dispatch(listProducts())
  },[])

  return (
    <div>
      {loading? <LoadingBox /> : error ? <MeassageBox variant="danger">{error}</MeassageBox> :
      <div className="row center">
        {
          products.map( (product) => (
            <Product key={product._id} product={product}></Product>
          ))
        }
      </div>
      }
    </div>
  )
}