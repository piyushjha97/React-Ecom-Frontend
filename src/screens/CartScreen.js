import React, { useEffect } from 'react'

export default function CartScreen(props) {

    const productId = props.match.params.id
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;

    useEffect(() =>{
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    }, [])

    console.log({productId},{qty})
    return ( <div>Cart Screen</div>)
    
}
