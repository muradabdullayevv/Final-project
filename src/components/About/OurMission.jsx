import React from 'react'
import './style.css'
import client1 from '../images/client1.png'
import client2 from '../images/client2.png'
function OurMission() {
  return (
    <>
    <section className='section4'>
        <div className="container1">
            <div className="about">
            <h4>Bizim missiyamız</h4>
            <h3>İlham verin, yenilik edin, paylaşın</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <img src={client1} alt="img" />
        </div>
        {/* container2 */}
        <div className="container2" >
            <img src={client2} alt="img" />
            <div className="about">
            <h4>Vizyonumuz</h4>
            <h3>Lazer fokus</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    </section>
    </>
)
}

export default OurMission