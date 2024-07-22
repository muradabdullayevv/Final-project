import React from 'react'
import './footerbottom.css'
import { NavLink } from 'react-router-dom'

function Footerbottom() {
    return (
        <div>
            <section id="footer_btm">
                <div class="footer-btm">
                    <div class="footer_btm_items">
                        <div class="copyright">
                            <p>Copyright 2022, Finsweet.com</p>
                        </div>
                        <div class="footer_menu">
                            <ul className='footer-links'>
                                <NavLink to="/home" >Ana səhifə</NavLink>
                                <NavLink to="/about">Haqqımızda</NavLink>
                                <NavLink to="/features">Xüsusiyyətləri</NavLink>
                                <NavLink to="/pricing">Qiymətlər</NavLink>
                                <NavLink to="/FAQ">Suallar</NavLink>
                                <NavLink to="/blog">BLog</NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footerbottom