import React from "react";
import "./index.css";
import rsl from "../../assets/images/rsl.png";
// import lorem from "../../assets/images/lorem.png";
import icon1 from "../../assets/images/icon1.png";
import icon3 from "../../assets/images/icon3.png";
import icon6 from "../../assets/images/icon6.png";
import useclient from "../../assets/images/use-client.png";
import freerevision from "../../assets/images/free-revision.png";
import code from "../../assets/images/code.png";
import man from "../../assets/images/man.png";
import Faq from "../../components/Faq/Faq";
import { NavLink } from "react-router-dom";
import Caruselswiper from "../../components/About/Caruselswip";
const Features = () => {
  return (
    <div>
      <div className="bg-tintblue">
        <div className="box">
          <div className="features1">
            <div className="texts">
              <h1>Sizə lazım olan bütün xüsusiyyətlər</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <NavLink to="/pricing">Qiymətlərə Baxın</NavLink>
            </div>
            <div className="img-rsl">
              <img src={rsl} alt="" />
            </div>
          </div>
        </div>

        <div className="lorem-png">
          {/* <img src={lorem} alt="" /> */}
          <Caruselswiper />
        </div>
        <div className="feature_head">
          <h3>Komandamızla işləməyin faydaları</h3>
        </div>
        <div className="benefit">
          <div className="feature_item ">
            <img src={icon6} alt="" />
            <h4>Təcrübəli yanaşma</h4>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.{" "}
            </p>
          </div>
          <div className="feature_item">
            <img src={icon3} alt="" />
            <h4>Şablon Fərdiləşdirmə</h4>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.{" "}
            </p>
          </div>
          <div className="feature_item">
            <img src={icon1} alt="" />
            <h4>Əvvəlcə Müştəri istifadə edir</h4>
            <p>
              Euismod faucibus turpis eu gravida mi. Pellentesque et velit
              aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
              aliquam sed mi.{" "}
            </p>
          </div>
        </div>
        <div className="people">
          <div className="use-client-first">
            <div className="words">
              <h5>Əvvəlcə Müştəridən istifadə edin </h5>
              <h3>
                Dünyanın ən yaxşı agentlikləri və frilanserləri istifadə edirlər
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
            <img src={useclient} alt="" />
          </div>
          <div className="revision">
            <div className="free-revision-rounds">
              <img src={freerevision} alt="" />
              <div className="text">
                <h5>Pulsuz yoxlama turları</h5>
                <h3>
                  Pulsuz təftiş və bir həftə pulsuz texniki xidmət əldə edin
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
          <div className="support">
            <div className="supports">
              <div className="coment">
                <h5>24/7 dəstək</h5>
                <h3>Bizimlə işləyərək siz 24/7 dəstək alacaqsınız </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
              <img src={man} alt="" />
            </div>
          </div>
          <div className="quick">
            <div className="quick-delivery">
              <img src={code} alt="" />
              <div className="sentence">
                <h5>Tez Çatdırılma</h5>
                <h3>
                  Standart beş web saytı üçün 1 həftəlik çatdırılma zəmanəti
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Faq />
      </div>
    </div>
  );
};

export default Features;
