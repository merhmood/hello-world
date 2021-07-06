import React,{useContext, useState} from 'react'
import {motion} from 'framer-motion'
import ProductList from './ProductList'

import './Products.css'

import { ProductDataContext } from '../contexts/ProductData'

let cache = {lastSort: '', data: [], dataLength: 0}

const Product = () => {

    
    const {product, productData} = useContext(ProductDataContext)
    const productDataUnsorted = [...productData]
    const productDataTosorted = [...productData]
    const {rating, pricing, sorting} = product
    let dataHandler = ''
    console.log(productData)
    const productDataSort = (array, sorting) => {

                let key,j;

                if(sorting === "low to high"){
                    
                    for (let i = 0; i < array.length; i++) {
                        key = array[i]
                        j = i - 1

                        while (j >= 0 && array[j].price > key.price) {

                            array[j + 1] = array[j]
                            j = j - 1
                            
                        }

                    array[j + 1] = key
                    }
                }
                else{

                     for (let i = 0; i < array.length; i++) {
                        key = array[i]
                        j = i - 1

                        while (j >= 0 && array[j].price < key.price) {

                            array[j + 1] = array[j]
                            j = j - 1                           
                        }

                    array[j + 1] = key
                    }

                }
                
    }
    if(pricing.data.length > 0 && rating.length > 0){
        
        const array = []
        
        if(pricing.data.length <= rating.length || pricing.data.length >= rating.length){
            for (let i = 0; i < pricing.data.length; i++) {
                for (let j = 0; j < rating.length; j++) {
                   if(pricing.data[i] === rating[j]) 
                    array.push(pricing.data[i])
                }
                
            }
        }
        console.log(array)
        if(sorting !== ''){
            if(sorting === cache.lastSort  &&  array.length === cache.dataLength){
                dataHandler = cache.data
                console.log("cache",cache.data)
            }
        
            else{
                productDataSort(array, sorting)
                cache.lastSort = sorting
                cache.data = array
                cache.dataLength = array.length
                dataHandler = array
                console.log("sort",cache.data)
                
            }
        }
        else{
            dataHandler = array
        }


    }
    else if(pricing.data.length > 0){
        if(sorting !== ''){
            if(cache.lastSort === sorting  &&  pricing.data.length === cache.dataLength){
                dataHandler = cache.data
                console.log('cache data')
                        }
                    
                        else{
                            productDataSort(pricing.data, sorting)
                            cache.lastSort = sorting
                            cache.data = pricing.data
                            cache.dataLength = pricing.data.length
                            dataHandler = pricing.data
                            console.log('sort')
                        }
                }
        else{
            dataHandler = pricing.data
        }
    }
    else if(rating.length > 0){
            if(sorting !== ''){

            if(cache.lastSort === sorting && rating.length === cache.dataLength){
                    dataHandler = cache.data
                    console.log('cache data')
                }
            
                else{
                    productDataSort(rating, sorting)
                    cache.lastSort = sorting
                    cache.data = rating
                    cache.dataLength = rating.length
                    dataHandler = rating
                    console.log('sort')
                }
        }
        else{
            dataHandler = rating
        }
    }
    else if(pricing.data.length === 0 && rating.length === 0){
        console.log('no length')

        if (sorting === '') {
            console.log('no length first block')
            dataHandler = productDataUnsorted
            console.log(productDataTosorted)
        }

        else if (sorting !== '') {
            console.log('no length ssecond block')
            if(cache.lastSort === sorting &&  productData.length === cache.dataLength){
                dataHandler = cache.data
                console.log('cache')
            }
        
            else{
                productDataSort(productDataTosorted, sorting)
                cache.lastSort = sorting
                cache.data = productDataTosorted
                cache.dataLength = productDataTosorted.length
                dataHandler = productDataTosorted
                console.log('sort')
            }  
        }
    }
    else{
            dataHandler = productDataUnsorted
        }


    const [productHeaderStyle, setProductHeaderStyle] = useState('product-header')

    const productHeaderHandler = () =>{
        setProductHeaderStyle('product-header-hide')
    }

    return (
        <div className='product'>
            <motion.div 
                className={productHeaderStyle}
                initial={{x: "-100vw"}}
                animate={{x: 0}}
                transition={{type:'spring', delay: 0.7, duration: 1.5, stiffness: 150}}
            >
                <p>Get unlimited free delivery with quick shop one time offer</p>
                <motion.span
                whileHover={{transform: 'rotate(360deg)'}}
                onClick={productHeaderHandler}
                >x</motion.span>
            </motion.div>
           <ProductList productListData={{dataHandler, pricing}}/> 
        </div>
    )
}

export default Product
