import React, { useState, useContext } from 'react';
import { PRODUCTS } from './Products';
import { ShopContext } from './ShopContext';
function Cart(){
    /*            PRODUCTS               */
/*    var  [products, setProducts]=useState([
        {
            id: 1,
            title: '1kg Pork',
            price: 50.00,
        },
        {
            id: 2,
            title: '1kg Beef',
            price: 60.00,
        },
        {
            id: 3,
            title: '1kg Lamb',
            price: 80.00,
        },
        {
            id: 4,
            title: '1kg Vienna',
            price: 40.00,
        },
        {
            id: 5,
            title: '1kg Russian',
            price: 50.00,
        },
        {
            id: 6,
            title: '1kg Chicken',
            price: 60.00,
        },
        {
            id: 7,
            title: '1kg Wors',
            price: 60.00,
        }
    ]);
*/
    /*          ACTIVE TABS              */
    var [activeIndex, setActiveIndex]=useState(1);
    var handleClick = (index)=>setActiveIndex(index);
    var checkActive = (index, className)=>activeIndex === index ? className:'';

    //THE FOLLOWING ACCESSES THE FUNCTIONS IN THE CONTEXT COMPONENT TO BE USED IN THIS PAGE
    var {addToCart, cartItems, removeFromCart, getTotalCartAmount, updateCartItemAmount}=useContext(ShopContext);

    var totalAmount = getTotalCartAmount();
    return(
        <>
            <div className='buttons'>
                <div  
                    className={`tab-btn ${checkActive(1,'active')}`}
                    onClick={()=>handleClick(1)}
                >
                    PLACE ORDER
                </div>
                <div 
                    id='cart' 
                    className={`tab-btn ${checkActive(2,'active')}`}
                    onClick={()=>handleClick(2)}
                >
                    <i className='fa-solid fa-cart-shopping' title='cart'></i>
                    
                </div>
            </div>
            <div className='block-4'>
                <div className={`tab-content ${checkActive(1, 'active')} `}>
                    <table className='list'>
                        {PRODUCTS.map( product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td className='meat-name'>
                                    {product.title}
                                </td>
                                <td><input value={cartItems[product.id]} onChange={(e)=>updateCartItemAmount(Number(e.target.value), product.id)} type='number' /></td>
                                <td className='price'>
                                    R {product.price}.00
                                </td>
                                <td><i className='fa-solid fa-add' onClick={()=>addToCart(product.id)}></i></td>
                            </tr>
                        ))}
                    </table>

                </div>
                <div className={`tab-content ${checkActive(2, 'active')}`}>
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
                                    <td><input value={cartItems[product.id]} onChange={(e)=>updateCartItemAmount(Number(e.target.value), product.id)} type='number' /></td>
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
export default Cart;