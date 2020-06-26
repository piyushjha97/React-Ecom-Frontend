
import React from 'react'
import data from '../data'

export default function ProductScreen(props) {
    console.log(props.match.params.id)
    const products = data.products.find(x=>x._id === props.match.params.id);
    return (
        <div>
           <h1> {products.name}</h1>
        </div>
    )
}

