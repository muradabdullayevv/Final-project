import React from 'react'
import './style.css'
import greenicon from '../images/greenicon.png'
import greyicon from '../images/greyicon.png'
function PricingCards() {
  return (
    <>
    <section className='pricing2'>
        <div className="cards">
            <div className="card">
               <div className="price">
               <h3>$299</h3>
                <span>Dizayna görə</span>
               </div>
                <div className="about">
                <h6>Açılış səhifə</h6>
                <p>Figma-da prototipləşdirmədən kənara çıxmağa hazır olduğunuzda,</p>
                </div>
                <div className="icon-conts">
                <div className="icon-cont">
                <img src={greenicon} alt="icon" />
                <p>Bütün məhdud bağlantılar</p>
                </div>
                <div className="icon-cont">
                <img src={greenicon} alt="icon" />
                <p>Öz analitik platforması</p>
                </div>
                <div className="icon-cont">
                <img src={greenicon} alt="icon" />
                <p>Söhbət dəstəyi</p>
                </div>
                {/* grey icon */}
                <div className="icon-cont2">
                <img src={greyicon} alt="icon" />
                <p>Optimize hashtags</p>
                </div><div className="icon-cont2">
                <img src={greyicon} alt="icon" />
                <p>Limitsiz istifadəçilər</p>
                </div>
                </div>

                {/* button */}
                <button>Başlamaq</button>
            </div>

            {/* second card */}
            <div className="card">
               <div className="price">
               <h3>$299</h3>
                <span>Dizayna görə</span>
               </div>
                <div className="about">
                <h6>Açılış səhifə</h6>
                <p>Figma-da prototipləşdirmədən kənara çıxmağa hazır olduğunuzda,</p>
                </div>
                <div className="icon-conts">
                <div className="icon-cont">
                <img src={greenicon} alt="icon" />
                <p>Bütün məhdud bağlantılar</p>
                </div>
                <div className="icon-cont">
                <img src={greenicon} alt="icon" />
                <p>Öz analitik platforması</p>
                </div>
                <div className="icon-cont">
                <img src={greenicon} alt="icon" />
                <p>Söhbət dəstəyi</p>
                </div>
                {/* grey icon */}
                <div className="icon-cont2">
                <img src={greyicon} alt="icon" />
                <p>Optimize hashtags</p>
                </div><div className="icon-cont2">
                <img src={greyicon} alt="icon" />
                <p>Limitsiz istifadəçilər</p>
                </div>
                </div>

                {/* button */}
                <button>Başlamaq</button>
            </div>

            {/* third card */}
            <div className="card">
               <div className="price">
               <h3>$299</h3>
                <span>Dizayna görə</span>
               </div>
                <div className="about">
                <h6>Açılış səhifə</h6>
                <p>Figma-da prototipləşdirmədən kənara çıxmağa hazır olduğunuzda,</p>
                </div>
                <div className="icon-conts">
                <div className="icon-cont">
                <img src={greenicon} alt="icon" />
                <p>Bütün məhdud bağlantılar</p>
                </div>
                <div className="icon-cont">
                <img src={greenicon} alt="icon" />
                <p>Öz analitik platforması</p>
                </div>
                <div className="icon-cont">
                <img src={greenicon} alt="icon" />
                <p>Söhbət dəstəyi</p>
                </div>
                {/* grey icon */}
                <div className="icon-cont2">
                <img src={greyicon} alt="icon" />
                <p>Optimize hashtags</p>
                </div><div className="icon-cont2">
                <img src={greyicon} alt="icon" />
                <p>Limitsiz istifadəçilər</p>
                </div>
                </div>

                {/* button */}
                <button>Başlamaq</button>
            </div>
        </div>
    </section>
    </>
)
}

export default PricingCards