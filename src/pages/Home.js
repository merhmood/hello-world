import React from 'react'
import Header from './components/Header'
import SideFilter from './components/SideFilter'
import Products from './components/Products'
import ShowModal from './contexts/ShowModal'

import './Home.css'

const Home = () => {
    return (
            <div>
                <ShowModal>
                    <Header />
                    <div className='body'>
                        <SideFilter />
                        <Products />
                    </div>
                </ShowModal>
            </div>
    )
}

export default Home