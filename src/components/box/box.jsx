import React from 'react'
import "./box.css"
import main from "../../image/box1.png"
function box() {
  return (
    <div className='temp'>
        <img src={main} alt="img" className='imgbox1' srcset="" />
        <h2 className='del'>Background verification</h2>
        <p className='p'>Assuring your capital is in safe hands, 
            we provide detailed verification reports of the project and 
            developer. These are customized and detailed...</p>
            <button className='btn-3'>Contact Us</button>
    </div>
  )
}

export default box