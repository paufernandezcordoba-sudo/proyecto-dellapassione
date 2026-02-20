import React from 'react'
import { useParams } from 'react-router'
import { products } from '../HomeScreen/HomeScreen'

export default function ProductDetailScreen() {
    const objeto = useParams()
    console.log(objeto)

    const product_selected = products.find(
        (product) => {
            return Number(product.id) === Number(objeto.product_id)
        }
    )

    console.log(product_selected)


    return (
        <div>
            <h1>ProductDetailScreen</h1>
            <h2>{product_selected.title}</h2>
            <span>${product_selected.price}</span>
        </div>
    )
}