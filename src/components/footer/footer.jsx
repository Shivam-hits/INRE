import React from 'react'
import "./footer.css"
import footer from "../../image/footer img.png" 
function Footer() {
  return (
    <div className='Footer'>
        <div className='footer_con'>
        <img src={footer} alt="logo" className='Footer_img' srcset="" />

        <div className='company'>
            <h2>Company</h2>
            <ul className='com'>
                <li>Home</li>
                <li>Our offering</li>
                <li>Our Team</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='useful_link'>
            <h2>Useful Link</h2>
            <ul className='use'>
                <li>Blogs</li>
                <li>FAQ's</li>
            </ul>
        </div>
        <div className='footer_detail'>
            <h2 className='email'>Email</h2>
            <p className='mail'>support@inreglobal.com</p>
            <h2 className='P_number'>Phone Number</h2>
            <p className='number'>+91 | 7019305889</p>
        </div>
        </div>
        
        <div className='footer_foot'>
            <p className='footer_dtl'>Copyright 2023. Designed by INRE Global</p>
        </div>
    </div>
  )
}
export default Footer;