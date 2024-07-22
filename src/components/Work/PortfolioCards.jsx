import React from 'react'
import './style.css'
import template1 from '../images/template1.png'
import template2 from '../images/template2.png'
import template3 from '../images/template3.png'
import template4 from '../images/template4.png'
import template5 from '../images/template5.png'
import template6 from '../images/template6.png'
import { NavLink } from 'react-router-dom'
function PortfolioCards() {
  return (
    <>
    <div className="cards-nav">
        <ul>
            <li>Hamısı</li>
            <li>UI Dizaynı</li>
            <li>Veb axınının dizaynı</li>
            <li>Figma Dizayn</li>
        </ul>
    </div>

    <div className="work-cards">
        <div className="work-card">
            <img src={template1} alt="img" />
            <h3>Şablon 1</h3>
            <p>Görünür, biz atmosferdə böyük hündürlüyə çatmışdıq, çünki səma ölü qara idi və ulduzlar parıldamağı dayandırmışdı.</p>
            <NavLink to="/readmore" > Portfolio bax &#10141;</NavLink>
        </div>

        {/* card2 */}

        <div className="work-card">
            <img src={template2} alt="img" />
            <h3>Şablon 2</h3>
            <p>Görünür, biz atmosferdə böyük hündürlüyə çatmışdıq, çünki səma ölü qara idi və ulduzlar parıldamağı dayandırmışdı.</p>
            <NavLink to="/readmore" > Portfolio bax &#10141;</NavLink>
        </div>

        {/* card3 */}

        <div className="work-card">
            <img src={template3} alt="img" />
            <h3>Şablon 3</h3>
            <p>Görünür, biz atmosferdə böyük hündürlüyə çatmışdıq, çünki səma ölü qara idi və ulduzlar parıldamağı dayandırmışdı.</p>
            <NavLink to="/readmore" > Portfolio bax &#10141;</NavLink>
        </div>
{/* card4 */}
        <div className="work-card">
            <img src={template4} alt="img" />
            <h3>Şablon 4</h3>
            <p>Görünür, biz atmosferdə böyük hündürlüyə çatmışdıq, çünki səma ölü qara idi və ulduzlar parıldamağı dayandırmışdı.</p>
            <NavLink to="/readmore" > Portfolio bax &#10141;</NavLink>
        </div>
{/* card5 */}
        <div className="work-card">
            <img src={template5} alt="img" />
            <h3>Şablon 5</h3>
            <p>Görünür, biz atmosferdə böyük hündürlüyə çatmışdıq, çünki səma ölü qara idi və ulduzlar parıldamağı dayandırmışdı.</p>
            <NavLink to="/readmore" > Portfolio bax &#10141;</NavLink>
        </div>
    

    {/* card6 */}

    <div className="work-card">
            <img src={template6} alt="img" />
            <h3>Şablon 6</h3>
            <p>Görünür, biz atmosferdə böyük hündürlüyə çatmışdıq, çünki səma ölü qara idi və ulduzlar parıldamağı dayandırmışdı.</p>
            <NavLink to="/readmore" > Portfolio bax &#10141;</NavLink>
        </div>

        </div>
    </>
)
}

export default PortfolioCards