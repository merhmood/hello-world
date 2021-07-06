import React,{useContext} from 'react'
import { ProductDataContext } from '../contexts/ProductData'

const SideFilterSorting = () => {
    const {dispatch} = useContext(ProductDataContext)
    return (
        <div>
            <p onClick={()=>dispatch({type:"SORTING", sorting:"LOW-TO-HIGH" })}>Low price to High price</p>
            <p onClick={()=>dispatch({type:"SORTING", sorting:"HIGH-TO-LOW"})}>High price to Low price</p> 
        </div>
    )
}

export default  SideFilterSorting