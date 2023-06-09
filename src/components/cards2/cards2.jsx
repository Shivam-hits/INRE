import React from 'react'
import "./cards2.css"
import toy from "../../image/toy-house.png"
function Card() {
  return (
    <div>
      <div className='card2'>
        <img src={toy} className='toyhouse' alt="house" />
        <div className='box'>
            <h2 className='title'>Who We Are</h2>
            <p className='para'>The Indian real estate sector is resilient despite global headwinds. 
                Returns are impressive and the sector is expected to reach US$ 1 trillion in market size by 2030 (Niti Aayog report, 2021). 
                However, the whole real estate purchase journey is very tedious and takes more than 
                2 years on average. Further, as the ticket size of this investment is large, security and trust become quite critical. 
                Problems compound when you are currently away from your purchase destination. If you are experiencing difficulties in the 
                real estate purchase journey, we are here to make it fast and transparent.</p>
                <button className='btn-2'>Contact Us </button>
        </div>
      </div>
    </div>
  )
}

export default Card;