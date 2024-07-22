import React from 'react'
import './homehero.css'
import image from '../../assets/images/home-main-img.jpg'
import { NavLink } from 'react-router-dom'
function Homehero() {
    return (
        <div>
            <section id="banner">
                <div className="home-hero">
                    <div className="banner_item">
                        <div className="banner_left">
                            <div className="banner_text">
                                <h1>Erkən startaplar üçün mükəmməl web saytların yaradılması</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                            <ul className="banner-links">
                                <NavLink to="/work">Bizim işlərimiz</NavLink>
                                <NavLink to="/pricing" >Qiymətlərə baxın &#10141;</NavLink>
                            </ul>


                        </div>
                        <div className="banner_right">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Homehero