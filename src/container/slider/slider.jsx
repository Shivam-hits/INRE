import React from 'react'
import Box from "../../components/box/box.jsx" 
import "./slider.css"
function Slider1() {
  return (
    <div className='slider'>
      <h2 className='slider_heading'>Our Offerings</h2>
      <hr className='slider_linebreak'/>
      <p className='slider_slogan'>This whole purchase journey can be divided into three stages. 
        For more details, <b className='click_here'>Click Here</b></p>

        <div>

          <div className='silder_pre_box1'>
            <p className='sno_number'>1</p>
            <p className='pre_box1_content'>Pre-Booking</p>
          </div>

          <div className='silder_pre_box2'>
            <p className='sno_number'>2</p>
            <p className='pre_box2_content'>Post-Booking & Pre-Registration</p>
          </div>

          <div className='silder_pre_box3'>
            <p className='sno_number'>3</p>
            <p className='pre_box3_content'>Post-Registration</p>
          </div>

        </div>

        <Box />
        <Box />
        <Box />
    </div>
  )
}
export default Slider1;