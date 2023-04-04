import React from 'react'
import "./cards.css"
import logo from "../../image/Rec.png"
import house from "../../image/house.png"
function Card() {
  return (
    <div className='card1'>
      <div className='card'>
        <h2 className='detail'>Making your <b className='Real_estate'>Real<br/> Estate</b> purchase<br/> journey faster and transparent</h2>
        <img src={house} alt="house" />
      </div>
    </div>
  )
}

export default Card;