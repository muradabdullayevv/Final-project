import React from "react";
import finsweet from "../../assets/images/finsweet.png";
import aboutprj from "../../components/images/aboutprj.png";
import "./Read.css";
import { NavLink } from "react-router-dom";

const ReadMore = () => {
  return (
    <div>
      {/* > Murad Abdullayev: */}
      <div className="read">
        <div className="more">
          <div className="finsweet">
            <h6>Veb dizaynı və inkişafı </h6>
            <h2>Finsweet Dizayn nümunələri</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </p>
            <div className="imgborder">
              <img src={finsweet} alt="" />
            </div>
          </div>
          <div className="media">
            <div className="face">
              <p>Müştəri</p>
              <h6>facebook.com</h6>
            </div>
            <div className="service">
              <p>Servis</p>
              <h6>Məhsul dizaynı</h6>
            </div>
            <div className="deliverable">
              <p>Çatdırılma</p>
              <h6>UI ekranları, UX axını və prototip</h6>
            </div>
          </div>
          <hr />
          <div className="about-project">
            <div className="head">
              <h3>Proyekt haqqında</h3>
            </div>
            <div className="sentences">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="lists">
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>
                  Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea
                </li>
                <li>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                </li>
                <li>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                </li>
              </ul>
            </div>
            <div className="borderimg">
              <img src={aboutprj} alt="" />
            </div>
            <div className="how-we-do">
              <div className="head">
                <h3>Biz bunu necə edirik ?</h3>
              </div>
              <div className="sentences">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              <div className="lists">
                <ul>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </li>
                  <li>
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea
                  </li>
                  <li>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse
                  </li>

                  {/* > Murad Abdullayev: */}
                  <li>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lets-do">
            <h2>Gəlin birlikdə möhtəşəm bir şey quraq</h2>
            <p>
              Nullam vitae purus at tortor mattis dapibus. Morbi purus est,
              ultricies nec dolor sit amet, scelerisque cursus purus.
            </p>
            <NavLink to="/contactus">Bizimlə əlaqə</NavLink>
          </div>
        </div>
      </div>

      {/* <div className="read">
        <div className="more">
          <div className="finsweet">
            <h6>Veb dizaynı və inkişafı </h6>
            <h2>Finsweet Dizayn nümunələri</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </p>
            <div className="imgborder">
              <img src={finsweet} alt="" />
            </div>
          </div>
          <div className="media">
            <div className="face">
              <p>Müştəri</p>
              <h6>facebook.com</h6>
            </div>
            <div className="service">
              <p>Servis</p>
              <h6>Məhsul dizaynı</h6>
            </div>
            <div className="deliverable">
              <p>Çatdırılma</p>
              <h6>UI ekranları, UX axını və prototip</h6>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ReadMore;
