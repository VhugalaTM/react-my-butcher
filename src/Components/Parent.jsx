import React from 'react'
import './Parent.css'
import Head from './head/Head';
import Cart from './Column-2/Cart/Cart';
import './Parent.css';
import ShopContextProvider from './Column-2/Cart/ShopContext';
import MainSlide from './Column-1/Slide/MainSlide';
function Parent(){
    return(
        <div className='main'>
            <Head greet='WELCOME TO MY BUTCHER'/>
            <div className='block-1'>MY BUTCHER</div>
            <div className='block-2'></div>
            
            {/* image slider */}
            <div className='block-3'>
                <MainSlide/>
            </div>
            {/* -------------- */}

            {/* Column -2 */}
            <ShopContextProvider>
                <Cart/>
            </ShopContextProvider>
            
            {/* --------- */}
            
            <div className='block-5'></div>
            <div className='footer'>Web.by Broken Cafe</div>
        </div>
    )
}
export default Parent;