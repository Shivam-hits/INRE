import React from 'react'
import img from "../../image/Happy announcement-pana.png"
import "./form.css"
function Form() {
  return (
    <div className='page_form'>
      <div className='form_text'>
      <form className='Name'>

        <div>
          <legend for="name">Full Name</legend>
          <input id="name" type="text" />
        </div>

        <div>
          <legend>city</legend>
          <select id="comp">
            <option value="sass">Bnglure</option>
            <option value="less">delhi</option>
            <option value="Gorakhpur">Gorakhpur</option>
            <option value="Bihar">Bihar</option>
            <option value="Bhubneswar">Bhubneswar</option>
          </select>
    </div>

        <div>
          <label for="email">Email</label>
          <input id="email" type="email" />
        </div>

        <div class="full-width">
          <button type="submit">submit</button>
        </div>
      </form>
      </div>
    
      <div className='form_img'>
        <img src={img} alt="form img" className='from_image' srcset="" />
      </div>

    </div>
  )
}

export default Form;