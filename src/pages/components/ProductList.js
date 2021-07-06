import React,{useContext} from 'react'
import { ProductDataContext } from '../contexts/ProductData'
import Rating from './Rating'

import './ProductList.css'

const ProductList = ({productListData}) => {

    const {dispatch} = useContext(ProductDataContext)
    const {dataHandler, pricing} = productListData
    console.log(dataHandler)

        if(dataHandler.length !== 0 && pricing.bool === false){
            return (
                <div className='product-list'>
                    {
                        dataHandler.map((product)=>{
                            const {id,img,title,price,rating} = product;
                            return(
                                <div key={id} className='product-list-wrapper' onClick={()=>dispatch({type: "SHOW-MODAL", id: id})}>
                                    <img src={img} alt="" className='product-img'/>
                                    <p>{title}</p>
                                    <h3>N {price}</h3>
                                    <Rating rating={rating}/> 
                                </div>
                            );
                        })
                    }
                </div>
            )
        }
        else{
            return <p>No product matches side filter</p>
        }
}

export default ProductList 