import React,{createContext, useContext} from 'react'
import Header from '../components/Header'
import SideFilter from '../components/SideFilter'
import Products from '../components/Products'
import productData from '../../Data'
import { ProductDataContext } from './ProductData'
import { motion, AnimatePresence } from 'framer-motion'

import './ShowModal.css'

export const ShowModalContext = createContext()
const ShowModal = props => {
    const {product, dispatch} = useContext(ProductDataContext)
    const {productView} = product
    console.log(productView)
    if(!productView){
        return (
        <div>
            <Header />
            <div className='body'>
            <SideFilter />
            <Products />
            </div>
        </div>
        )
    }
    const [productContent] = productData.filter(product => product.id === productView.id)

    console.log(productContent)
    return (
      <>
      <div className='modal-wrapper'>
          <AnimatePresence initial={false}>
                {productView.showModal &&(
                <motion.div>
                            <div className='backdrop'></div>
                            <p className='close-modal' onClick={()=>dispatch({type: "CLOSE-MODAL"})}>X</p>
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{delay: 0.2, duration: 0.5}} 
                            className='product-content'>

                                {/* here is the modal product display */}

                                <img src={productContent.img} alt="" />
                                <div className='details-wrapper'>
                                    <div>
                                        <h5>{productContent.title}</h5>
                                        <p>Price: N{productContent.price}</p>
                                    </div>
                                    <button>ADD TO CART</button>
                                </div>

                            </motion.div>
                        </motion.div>
                    )
                }
                )
            </AnimatePresence>
            <div className={!productView.showModal ? '' : 'showmodal-body'}>
                <ShowModalContext.Provider value={{}}>
                    {props.children}
                </ShowModalContext.Provider>
            </div>
      </div>
      </>
    )
}

export default ShowModal