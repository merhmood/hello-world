import React,{useContext} from 'react'
import { ProductDataContext } from '../contexts/ProductData'

const ClearAll = () => {
    const {dispatch} = useContext(ProductDataContext)
    return (
        <>
            <button onClick={()=>dispatch({type: "RESET"})}>Clear all filter</button>
        </>
    )
}

export default ClearAll