import React from "react";
import "./index.css";

const ContactUs = () => {
  return (
    <div>
      <div className="send">
        <h1>Bizimlə əlaqə saxlayın</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>
      <div className="inputs">
        <div className="input">
          <div className="input1">
            <div className="inputflex">
              <lable>Ad</lable>
              <input type="text" placeholder="Adınız" />
            </div>
            <div className="inputflex">
              <lable>E-poçt</lable>
              <input type="email" placeholder="E-poçtunuz" />
            </div>
          </div>

          <div className="input2">
            <div className="inputflex">
              <lable>Mövzu</lable>
              <input type="text" placeholder="Kontekst təmin edin" />
            </div>
            <div className="inputflex">
              <lable>Mövzu</lable>
              <input type="text" placeholder="Mövzu seçin" />
            </div>
          </div>

          <div className="input3">
            <div className="inputflex">
              <lable>Mesaj</lable>
              <textarea placeholder="fikirinizi bildirin"></textarea>
            </div>
          </div>
          <div className="send-message">
            <button> Mesaj göndərin </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
