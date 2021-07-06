import React from 'react'
import SideFilterRating from './SideFilterRating'
import SideFilterPricing from './SideFilterPricing'
import SideFilterSorting from './SideFilterSorting'
import ClearAll from './ClearAll'
import './SideFilter.css'

const SideFilter = () => {
    
    return (
        <div className='side-filter'>
            <div className='rating'>
                <h4>Rating</h4>
                <SideFilterRating/>                
            </div>
            <div className='pricing'>
                <h4>pricing</h4>
                <div className='pricing-container'>
                    <div className='currency'>
                        <img src="https://image.flaticon.com/icons/png/512/32/32974.png" alt="currency" />
                    </div>
                    <div className='value-range' >
                        <SideFilterPricing />
                    </div>
                </div>
            </div>
            <div className='sorting'>
                <h4>sort by</h4>
                <SideFilterSorting />
            </div>
            <div className='clear-filter'>
                <ClearAll />
            </div> 
        </div>
    )
}

export default SideFilter