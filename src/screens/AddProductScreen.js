import React from 'react'
import { useEffect, useState, } from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { saveProduct } from '../actions/productAction';

function ProductsScreen(props) {


  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');

    const productSave = useSelector(state=>state.productSave);
    const {laoding, success, error}= productSave;

    const {
        loading: loadingSave,
        success: successSave,
        error: errorSave,
      } = productSave;

    const dispatch = useDispatch();


    //useEffect 

    useEffect(() => {
      
        return () => {
            // cleanup
        }
    }, [successSave])

        
    const submitHandler=(e) =>{
        e.preventDefault();
        dispatch(saveProduct({name, price,image,brand, category, countInStock, description}))
    }


    console.log(errorSave)
    return <div className="form">

        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
             <div className="main">   <h3>Add Product</h3> </div>  
            
             <li>
                {loadingSave && <div>Loading...</div>}
                {errorSave && <div> {errorSave}
                </div>}
                 </li> 
                </li>
                <li>
                    <label htmlFor="Name">
                        Name
                    </label>
                    <input type="text"
                  name="name"
                  value={name}
                  id="name"
                  onChange={(e) => setName(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label htmlFor="price">
                        Price
                    </label>
                    <input type="text"
                  name="price"
                  value={price}
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label htmlFor="image">
                        Image
                    </label>
                    <input type="text"
                  name="image"
                  value={image}
                  id="image"
                  onChange={(e) => setImage(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label htmlFor="brand">
                        Brand
                    </label>
                    <input type="text"
                  name="brand"
                  value={brand}
                  id="brand"
                  onChange={(e) => setBrand(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label htmlFor="countInStock">
                        Set Count
                    </label>
                    <input type="text"
                  name="countInStock"
                  value={countInStock}
                  id="countInStock"
                  onChange={(e) => setCountInStock(e.target.value)}
                >

                    </input>
                </li>
                <li>
                    <label htmlFor="name">
                        Category
                    </label>
                    <input type="text"
                  name="category"
                  value={category}
                  id="category"
                  onChange={(e) => setCategory(e.target.value)}
                >

                    </input>
                </li>
                <li>
                    <label htmlFor="Name">
                        Description
                    </label>
                    <textarea name="description"
                  value={description}
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                >

                    </textarea>
                </li>
                
                <li>
                    <button type="submit" className="button primary" >
                        Add
                    </button>

                </li>
            </ul>

        </form>
    </div>
}


export default ProductsScreen;


