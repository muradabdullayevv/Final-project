import React from 'react'
import './footer.css'
import logo from '../../assets/images/logo.png'




function Footer() {
    return (
        <div>
            <section id="footer_top">
                <div class="container">
                    <div class="footer_top_items">
                        <div class="footer_top_left">
                            <div class="logo">
                                <img src={logo} alt="" />
                                <p>We are always open to discuss your project and improve your online presence.</p>
                            </div>
                            <div class="footer_info">
                                <div class="footer_info_one">
                                    <h4>Email me at</h4>
                                    <h3>contact@website.com</h3>
                                </div>
                                <div class="footer_info_one">
                                    <h4>Call us</h4>
                                    <h3>0927 6277 28525</h3>
                                </div>
                            </div>
                        </div>
                        <div class="footer_top_right">
                            <h3>Lets Talk!</h3>
                            <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                            <div class="footer_right_icons">
                                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#"><i class="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer