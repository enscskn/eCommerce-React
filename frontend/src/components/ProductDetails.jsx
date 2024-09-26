import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedProduct } from '../redux/slices/productSlice';
import '../css/ProductDetails.css';

import { CiCirclePlus } from "react-icons/ci"
import { CiCircleMinus } from "react-icons/ci"

function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector(store => store.product);

    const { price, image, title, description } = selectedProduct;

    const [count , setCount] = React.useState(1);

    const dispatch = useDispatch();

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    }

    useEffect(() => {
        getProductById();   
    }, []);

    const getProductById = () => {
        products && products.map(product => {
            if(product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        });
    }
    return (
        <div className='product-container'>
            <div className='product-details-container'>
                <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>
                    <img src={image} width="300" height="400" alt="" />
                </div>
                <div style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <h3 className='price'>${price}</h3>
                    </div>
                    <div>
                        <div className='quantity'>
                            <CiCircleMinus onClick={decrement} />
                            <input className='input-quantity' type='text' value={count} />
                            <CiCirclePlus onClick={increment}/>
                        </div>
                    </div>
                    <div>
                        <button className='btn'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails