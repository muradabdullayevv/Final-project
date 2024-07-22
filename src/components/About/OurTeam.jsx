import React from 'react'
import './style.css'
import team1 from '../images/team1.png'
import team2 from '../images/team2.png'
import team3 from '../images/team3.png'
import team4 from '../images/team4.png'
function OurTeam() {
  return (
    <>

    <section className='section6'>
       <h2>Komanda ilə tanış olun</h2> 
       <div className="cards">
        <div className="card">
            <img src={team1} alt="img" />
            <h6>John Smith</h6>
            <p>CEO</p>
        </div>
        {/* card2 */}
        <div className="card">
            <img src={team2} alt="img" />
            <h6>Simon Adams</h6>
            <p>CTO</p>
        </div>
        {/* card3 */}
        <div className="card">
            <img src={team3} alt="img" />
            <h6>Paul Jones</h6>
            <p>Dizayn rəhbəri</p>
        </div>
        {/* card4 */}
        <div className="card">
            <img src={team4} alt="img" />
            <h6>Sara Hardin</h6>
            <p>Layihə meneceri</p>
        </div>
       </div>
    </section>
    </>
)
}

export default OurTeam