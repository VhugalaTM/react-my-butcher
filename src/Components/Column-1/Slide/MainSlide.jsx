import React from 'react'
import img1 from '../Butcher-img/1.jpg'
import img2 from '../Butcher-img/2.jpg'
import img3 from '../Butcher-img/3.jpg'
import img4 from '../Butcher-img/4.jpg'
import SubSlide from './SubSlide'
import './MainSlide.css'
function MainSlide(){
    var slides=[img1, img2, img3, img4]
    /* 434 431 */
  return (
    <div style={{width: '100%', margin: '0 auto'}} className='main-slide'>
        <SubSlide autoSlide={true}>
            {slides.map((s)=>(
                <img src={s} className='img-slider' />
            ))}
        </SubSlide>
    </div>
  )
}
export default MainSlide
