import React from 'react'
import './style.css'
import circle from '../images/circle.png'
import line from '../images/line.png'
function TheProcess() {
  return (
    <>
    <section className='section3'>
    <h2>İzlədiyimiz proses</h2>
    <div className="cards">
      {/* first card */}
        <div className="card">
           <div className="images">
           <img src={circle} alt="img" className='circle
           '/>
            <img src={line} alt="img" className='line' />
           </div>
           <h6>Planlaşdırma</h6>
           <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
           </p>
        </div>
        {/* second  */}
        <div className="card">
           <div className="images">
           <img src={circle} alt="img" className='circle
           '/>
            <img src={line} alt="img" className='line' />
           </div>
           <h6>Konsepsiya</h6>
           <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
           </p>
        </div>
        {/* third */}
        <div className="card">
           <div className="images">
           <img src={circle} alt="img" className='circle
           '/>
            <img src={line} alt="img" className='line' />
           </div>
           <h6>Dizayn</h6>
           <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
           </p>
        </div>
        {/* four */}
        <div className="card">
           <div className="images">
           <img src={circle} alt="img" className='circle
           '/>
            <img src={line} alt="img" className='line' />
           </div>
           <h6>İnkişaf</h6>
           <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
           </p>
        </div>
    </div>
    </section>
    </>
  )
}

export default TheProcess