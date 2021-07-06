import React from 'react';
import Home from './pages/Home';
import ProductData from './pages/contexts/ProductData';

import './App.css'

const App = () =>{

    return(
        <>
        <div className='app'>
            <ProductData>
                    <Home />
            </ProductData>
        </div>
        </>
    );

}



export default App