import React from 'react'
import './style.css'
import sec2 from '../images/sec2.png'
function WhoAreWe() {
  return (
    <>
   <section className='section2'>
    <h4>Biz kimik</h4>
    <div className="containers">
    <div className="container5">
      <h3>Məqsəd diqqət mərkəzindədir</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    <div className="container2">
      <h3>Davamlı inkişaf</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
    </div>
    <img src={sec2} alt="img" className='sec2-img'/>
       </section>
       
    </>
  )
}

export default WhoAreWe