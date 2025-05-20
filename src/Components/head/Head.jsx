import React from 'react'
function Head(a){
    var styling1={
        display:"flex",
        alignItems:"center",
        justifyContent: "space-between",
    }
    var stylingIcons={
        background:"white",
        color: "black",
        borderRadius:"5px",
        cursor:"pointer",
        padding:"2px",
    }
    return(
        <>
            <div className='head' style={styling1}>
                <div className='m-icons-l' style={stylingIcons}>
                    <i className='fa-brands fa-facebook' title='facebook'><a href="#"></a></i>
                    <i className='fa-brands fa-twitter' title='twitter'><a href="#"></a></i>
                    <i className='fa-solid fa-bullhorn'><a href="#"></a></i>
                </div>
                {a.greet}
                <div className='m-icons' style={stylingIcons}>
                    <i className='fa-brands fa-facebook' title='facebook'><a href="#"></a></i>
                    <i className='fa-brands fa-twitter' title='twitter'><a href="#"></a></i>
                    <i className='fa-solid fa-bullhorn'><a href="#"></a></i>
                </div>
            </div>
        </>
    )
}
export default Head;