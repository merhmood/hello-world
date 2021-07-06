import React,{useContext} from 'react'
import { ProductDataContext } from '../contexts/ProductData'

import './SideFilterRating.css'

const SideFilterRating = () => {
    const {dispatch, productData} = useContext(ProductDataContext)


    return (
        <>
                <div className='four-star' onClick={()=>dispatch({type: "CHANGE-RATING", rating: 4, data: productData})}>
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" />
                    <span> & above</span>
                </div>
                <div className='three-star' onClick={()=>dispatch({type: "CHANGE-RATING", rating: 3, data: productData})}>
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" />
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" />
                    <span> & above</span>
                </div>
                <div className='two-star' onClick={()=>dispatch({type: "CHANGE-RATING", rating: 2, data: productData})}>
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" />
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" />
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" />
                    <span> & above</span>
                </div>
                <div className='one-star' onClick={()=>dispatch({type: "CHANGE-RATING", rating: 1, data: productData})}>
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" />
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" />
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" />
                    <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" />
                    <span> & above</span>
                </div>
        </>
    )
}

export default SideFilterRating