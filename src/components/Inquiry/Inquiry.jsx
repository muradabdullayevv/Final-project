import React from 'react'
import "./Inquiry.css"
import inquiry from "../../assets/images/inquiry.png"
import { NavLink } from 'react-router-dom'

function Inquiry() {
    return (
        <div>
            <section id="inquiry">
                <div className="inqry">
                    <div className="inquiry_item">
                        <div className="inquiry_left">
                            <img src={inquiry} alt="" />
                            <div className="inquiry_left_img_overlay">
                                <h3>Erkən startaplar üçün mükəmməl web saytların yaradılması</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
                            </div>
                        </div>
                        <div className="inquiry_right">
                            <h4>Sorğu göndərin</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <input type="text" placeholder="Adınız" />
                            <input type="email" placeholder="E-poçtunuz" />
                            <input type="text" placeholder="Figma dizayn URL-nizi yapışdırın" />
                            <button>Sorğu göndərin</button>
                            <NavLink to="/contactus">Bizimlə əlaqə saxlayın  &#10141; </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Inquiry