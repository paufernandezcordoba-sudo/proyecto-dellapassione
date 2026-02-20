import React from 'react'
import { Link } from 'react-router'

export const products = [
    {
        id: 1,
        title: 'Product 1',
        price: 100
    },
    {
        id: 2,
        title: 'Product 2',
        price: 200
    },
    {
        id: 3,
        title: 'Product 3',
        price: 300
    }
]

export default function HomeScreen() {
    return (
        <div>
            <h1>HomeScreen</h1>
            <Link to='/about'>| About </Link>
            <Link to='/contact'>| Contact |</Link>
            <h2>Products</h2>{
                products.map (product => (
                    <div key={product.id}>
                        <h3>{product.title}</h3>   
                        <span>${product.price}</span>
                        <Link to={`/product/${product.id}`}>Ir a detalle</Link>
                        <hr />
                    </div>
                ))
            }
                    </div>
                )
}

