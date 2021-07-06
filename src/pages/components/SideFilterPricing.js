import React,{useState, useContext} from 'react'
import { ProductDataContext } from '../contexts/ProductData'
import { motion, AnimatePresence } from 'framer-motion'

import './SideFilterPricing.css'

const SideFilterPricing = (props) => {
    const {productData, dispatch} = useContext(ProductDataContext)
    const [pricing, setPricing] = useState({max: '', min: ''})
    const [errorPricingValue, setErrorPricingValue] = useState({error: false, errorMsg: ""})

    const pricingHandler = () =>{
        if (pricing.min === "" && pricing.max ==="") {
            setErrorPricingValue({error: true, errorMsg:"Input pricing value"})
        }
        else if(parseInt(pricing.min) > parseInt(pricing.max) || parseInt(pricing.min) === parseInt(pricing.max)){
            setErrorPricingValue({error: true, errorMsg:"Invalid pricing value"})
        }
        else {
            setErrorPricingValue({error: false})
            dispatch({type: "PRICING", pricing: pricing, data: productData})
        }
    }
    return (
        <>
            <input type="text" placeholder='min' value={pricing.min} onChange={e=>setPricing({...pricing, min: e.target.value})} />
            <input type="text" placeholder='max' value={pricing.max} onChange={e=>setPricing({...pricing, max: e.target.value})}/>
            <button className='pricing-button' onClick={pricingHandler}>Go</button>
            <AnimatePresence initial={false}>
                {errorPricingValue.error && 
                    <motion.p
                    initial={{x: -300, opacity: 0}}
                    animate= {{x: 0, opacity: 1}}
                    exit={{x: -300, opacity: 0}}
                    transition={{duration: 0.5}}
                    className={errorPricingValue.error ? 'error-value-true' :'error-value-false'}>
                    {errorPricingValue.errorMsg}
                    <span className="remove-error-message" onClick={()=>setErrorPricingValue({error: false, errorMsg: ""})}>x</span>
                    </motion.p>
                }
            </AnimatePresence>
        </>
    )
}
export default SideFilterPricing