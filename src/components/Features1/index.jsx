import React from 'react'
import "./Features1.css"
import icon1 from "../../assets/images/icon1.png"
import icon2 from "../../assets/images/icon2.png"
import icon3 from "../../assets/images/icon3.png"
import icon4 from "../../assets/images/icon4.png"
import icon5 from "../../assets/images/icon5.png"
import icon6 from "../../assets/images/icon6.png"
function Features() {
    return (
        <div>
            <section id="feature">
                <div className="ftr">
                    <div className="feature_head">
                        <h4>Xüsusiyyətlər</h4>
                        <h3>Problemləri həll edən dizayn, hər dəfə bir məhsul</h3>
                    </div>
                    <div className="feature_btm">
                        <div className="feature_item">
                            <img src={icon1} alt="" />
                            <h4>Əvvəlcə Müştəri istifadə edir</h4>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                        <div className="feature_item">
                            <img src={icon2} alt="" />
                            <h4>Tiki Pulsuz Təftiş Turu</h4>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                        <div className="feature_item">
                            <img src={icon3} alt="" />
                            <h4>Şablon Fərdiləşdirmə</h4>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                        <div className="feature_item fmt">
                            <img src={icon4} alt="" />
                            <h4>24/7 Dəstək</h4>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                        <div className="feature_item fmt">
                            <img src={icon5} alt="" />
                            <h4>Tez Çatdırılma</h4>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                        <div className="feature_item fmt">
                            <img src={icon6} alt="" />
                            <h4>Təcrübəli yanaşma</h4>
                            <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Features;