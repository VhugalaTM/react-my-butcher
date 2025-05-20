import React, {useState, useContext} from 'react';
import { PRODUCTS } from '../../Column-2/Cart/Products';
import { ShopContext } from '../../Column-2/Cart/ShopContext';
import MainSlide from '../../Column-1/Slide/MainSlide';
function MobileCart() {
    /*          ACTIVE TABS              */
    var [activeIndex, setActiveIndex]=useState(1);
    var handleClick = (index)=>setActiveIndex(index);
    var checkActive = (index, className)=>activeIndex === index ? className:'';

    //THE FOLLOWING ACCESSES THE FUNCTIONS IN THE CONTEXT COMPONENT TO BE USED IN THIS PAGE
    var {addToCart, cartItems, removeFromCart, getTotalCartAmount, updateCartItemAmount}=useContext(ShopContext);

    var totalAmount = getTotalCartAmount();
    
  return (
    <>
        <div className='buttons'>
            <div  
                className={`tab-btn ${checkActive(1,'active')}`}
                onClick={()=>handleClick(1)} id='myhome'
            >
                <i className='fa-solid fa-home'></i>
        
            </div>
            <div  
                className={`tab-btn ${checkActive(2,'active')}`}
                onClick={()=>handleClick(2)}
            >
                <div className='order'>PLACE ORDER</div>
            </div>
            <div 
                id='cart' 
                className={`tab-btn ${checkActive(3,'active')}`}
                onClick={()=>handleClick(3)}
            >
                <i className='fa-solid fa-cart-shopping' title='cart'></i>
            </div>
        </div>
        <div className='myContent'>
            <div className={`tab-content ${checkActive(1, 'active')} slide-content`}>
                    <MainSlide/>
            </div>
            <div className={`tab-content ${checkActive(2, 'active')} `}>
                <table className='list'>
                    {PRODUCTS.map( product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td className='meat-name'>
                                {product.title}
                            </td>
                            <td><input type='number' value={cartItems[product.id]} onChange={(e)=>updateCartItemAmount(Number(e.target.value), product.id)} /></td>
                            <td className='price'>
                                R {product.price}.00
                            </td>
                            <td><i className='fa-solid fa-add' onClick={()=>addToCart(product.id)}></i></td>
                        </tr>
                    ))}
                </table>
            </div>
            <div className={`tab-content ${checkActive(3, 'active')}`}>
                <div className='foot'>
                    <p>Total</p>
                    <p id='total'>R {totalAmount}.00</p>
                </div>
                <hr/>
                <table className='list' id='cart-item'>
                    {PRODUCTS.map((product)=>{
                        if(cartItems[product.id]!=0){
                            return(
                                <tr key={product.id}>
                                <td>{product.id}</td>
                                <td className='meat-name'>
                                    {product.title}
                                </td>
                                <td><input type='number' value={cartItems[product.id]} onChange={(e)=>updateCartItemAmount(Number(e.target.value), product.id)} /></td>
                                <td className='price'>
                                    R {product.price}.00
                                </td>
                                <td><i className='fa-solid fa-trash' onClick={()=>removeFromCart(product.id)}></i></td>
                                </tr> 
                            );
                        }
                    })}
                </table>
                {
                    totalAmount > 0 ? (
                        <button className='checkout'>CHECKOUT</button>
                    ) :(
                        <table class="list" id="cart-item">
                            <tr><td>Cart Is Empty</td></tr>
                        </table>
                    )
                }
            </div>
        </div>
    </>
  )
}

export default MobileCart
