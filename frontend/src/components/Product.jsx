import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
    const { id, price, image, title, description } = product;

    const navigate = useNavigate();
    return (
      <div className='product-card'>
        <div className='product-image-container'>
          <img className='product-image' src={image} alt={title} />
        </div>
        <div className='product-info'>
          <div className='product-title'>{title}</div>
          <div className='product-price'>${price.toFixed(2)}</div>
        </div>
        <div className='product-action'>
          <button onClick={() => navigate("/product-details/" + id)} className='product-detail-button'>Go to Detail</button>
        </div>
      </div>
    )
}

export default Product