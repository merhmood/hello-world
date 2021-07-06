import React,{createContext, useReducer} from 'react'
import { sideFilterReducer } from '../reducer/sideFilterReducer';
import productData from '../../Data'

export const ProductDataContext = createContext();

const ProductData = (props) => {

    const [product, dispatch] = useReducer(sideFilterReducer, {rating: [], pricing: {bool: false, data: []}, sorting: '', productView: {showModal: false, productId: null}, reset: false})
    console.log(product.reset)
    return (
        <ProductDataContext.Provider value={{productData, product, dispatch}}>
            {props.children}
        </ProductDataContext.Provider>

    )
}

export default ProductData