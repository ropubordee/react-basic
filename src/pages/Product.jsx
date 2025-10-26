import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <h1>Product</h1>

      <p><Link to={'1'}>Asus</Link> </p>
      <p><Link to={'2'}>MSI</Link> </p>
      <p><Link to={'3'}>Macbook</Link> </p>
    </div>
  )
}

export default Product
