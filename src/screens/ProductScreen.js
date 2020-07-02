import React, { useEffect } from 'react'
import {detailsProduct} from '../actions/productAction'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function ProductScreen(props) {

    
    
    const productDetails = useSelector(state => state.productDetails)
    const {product,loading,error}= productDetails
    const dispatch = useDispatch();


    //useEffect 

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id))
        return () => {
            // cleanup
        }
    }, [])

    return <div>
        <div className="back-to-result">
            <Link to="/">Back To Home Page</Link>
        </div>

        {loading? <div> Loading...</div>:
        error? <div> {error} </div> :
        (
           <div className="details">
                <div className="details-image">
                    <img src={product.image} alt="product" ></img>
            
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            {product.rating} Stars ({product.numReviews} Reviews)
                        </li>
                        <li>
                           Price: <b>{product.price}</b>
                        </li>
                        <li>
                            
                                Description:
                                <div>
                                    {product.description}
                                </div>
                            
                        </li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                       <li>
                          Price : {product.price}     
                        </li> 
                        <li>
                            Status:{product.status}
                        </li>
                        <li>
                            Qty:<select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                            </select>
                        </li>
                        <li>
                            <button className="button">Add To Cart</button>
                        </li>
                    </ul>
                </div>
            </div>
         
        )
        
        }
        </div> 
}

export default ProductScreen;