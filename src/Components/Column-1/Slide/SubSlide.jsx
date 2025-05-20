import React, { useEffect, useState } from 'react'

function SubSlide({children: slides, autoSlide=false, autoSlideInterval=3000}) {
    var [current, setCurrent]=useState(0)

    var next = () => setCurrent((current) => (current == slides.length - 1 ? 0 : current + 1))

    var activate='activate'
    var deactivate='deactivate'

    useEffect(()=>{
        if(!autoSlide) return;
        var slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval)
    }, [])


    return (
    <div style={{width: '100%', height: '100%', position: 'relative'}}>
      <div style={{width: '100%', height: '100%', display: 'flex', transform: `translateX(-${current * 100}%)`}} className='img-slide-img'>
        {slides}
      </div>
        <div className='radio-nav'>
            {slides.map((_, i)=>(
                <div className={`radio ${current == i ? activate : deactivate}`} onClick={() => setCurrent(i)}/>
            ))}
        </div>
    </div>
  )
}

export default SubSlide
