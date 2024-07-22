import React from 'react'
import "./Client.css"
import client from "../../assets/images/client.png"

function Client() {
    return (
        <div>
            <section id="client">
                <div className="clnt">
                    <div className="client_item">
                        <div className="client_left">
                            <h3>Müştərilərimiz bizim haqqımızda nə deyirlər</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                        </div>
                        <div className="client_right">
                            <q>İndiyə qədər işlədiyimiz ən yaxşı agentlik. Onlar məhsulumuzu başa düşürlər və böyük diqqət yetirərək yeni funksiyalar əlavə edə bilirlər.
                            </q>
                            <div className="client_quote">
                                <img src={client} alt="" />
                                <div className="client_quote_text">
                                    <h3>Jenny Wilson</h3>
                                    <h4>Vitse prezident</h4>
                                </div>
                                <div className="client_slider_arrow">
                                    <i className="fa-solid fa-chevron-left"></i>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Client