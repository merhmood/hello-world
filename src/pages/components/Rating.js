import React from 'react'

import './Rating.css'

const Rating = ({rating}) => {

    if(rating && rating > 4 && rating < 5){
        return (
            <div className='product-rating'>
                <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                <img src="https://image.flaticon.com/icons/png/512/25/25662.png" alt="halfStar" />   
            </div>
        );
    }
    else if(rating && rating === 4){
        return (
            <div className='product-rating'>
                <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" />  
            </div>
        );
    }
    else if(rating && rating > 3 && rating < 4){
        return (
            <div className='product-rating'>
                <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                <img src="https://image.flaticon.com/icons/png/512/25/25662.png" alt="halfStar" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" /> 
            </div>
        );
    }
    else if(rating && rating === 3){
        return (
            <div className='product-rating'>
                <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" /> 
                <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" /> 
            </div>
        );
    }
    else if(rating && rating > 2 && rating < 3){
        return (
            <div className='product-rating'>
                <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                <img src="https://image.flaticon.com/icons/png/512/25/25662.png" alt="halfStar" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" /> 
            </div>
        );
    }
    else if(rating && rating === 2){
        return (
            <div className='product-rating'>
                <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" /> 
                <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" /> 
            </div>
        );
    }
    else if(rating && rating > 1 && rating < 2){
        return (
            <div className='product-rating'>
                <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                 <img src="https://image.flaticon.com/icons/png/512/25/25662.png" alt="halfStar" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" /> 
                <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" /> 
                <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" /> 
            </div>
        );
    }
    else if(rating && rating === 1){
        return (
            <div className='product-rating'>
                <img src="https://image.flaticon.com/icons/png/512/1828/1828961.png" alt="star" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" />
                <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" /> 
                <img src="https://image.flaticon.com/icons/png/512/1828/1828970.png" alt="emptyStar" /> 
            </div>
        );
    }
    else{
        return '';
    }
}

export default Rating