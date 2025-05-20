import React from "react";
import './Parent.css';
import MobileCart from "./Mobile-Comp/Mobile Cart/MobileCart";
import ShopContextProvider from "./Column-2/Cart/ShopContext";
function Mobile(){
    return(
        <div className="main-2">
            <div className="block-1">WELCOME TO MY BUTCHER</div>
            <div className="block-2">MY BUTCHER</div>
            <ShopContextProvider>
                <MobileCart/>
            </ShopContextProvider>
            <div className="signature">
                Web.by Broken Cafe    
            </div>
            <div className="icons">
                <div>
                    <i class="fa-brands fa-facebook" title="facebook">
                        <a href=""></a>
                    </i>
                    <i class="fa-brands fa-twitter" title="twitter">
                        <a href=""></a>
                    </i>
                    <i class="fa-solid fa-bullhorn" title="share">
                        <a href=""></a>
                    </i>
                </div>
            </div>
            <div className="block-3"></div>
            <div className="block-4"></div>
        </div>
    )
}
export default Mobile;