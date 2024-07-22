import React from 'react'
import "./homewework.css"
import one from "../../assets/images/one.png"
import two from "../../assets/images/two.png"
import three from "../../assets/images/three.png"
import four from "../../assets/images/four.png"
import { NavLink } from 'react-router-dom'

function Homewework() {
    return (
        <div>
            <section id="work">
                <div className="how-we-work">
                    <div className="work_items">
                        <div className="work_left">
                            <h2>Necə işləyirik ?</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <NavLink to="/contactus">Bizimlə əlaqə saxlayın &#10141;</NavLink>
                        </div>
                        <div className="work_right">
                            <div className="work_right_item">
                                <img src={one} />
                                <h3>Strategiya</h3>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                            <div className="work_right_item">
                                <img src={two} />
                                <h3>Modelləşdirmə</h3>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                            <div className="work_right_item mt">
                                <img src={three} />
                                <h3>Dizayn</h3>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                            <div className="work_right_item mt">
                                <img src={four} />
                                <h3>İnkişaf</h3>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Homewework