import React from 'react'
import "./view.css"
import image from "../../assets/images/image.png"
import image2 from "../../assets/images/project_2.png"
import image3 from "../../assets/images/join.png"
import { NavLink } from 'react-router-dom'

function View() {
  return (
    <div>
      <section id="project">
        <div className="pr">
          <div className="project_top">
            <h1>Layihələrimizə baxın</h1>
            <div className="view-more">
              <NavLink to="/work">Daha çoxuna baxın &#10141;</NavLink>
            </div>
          </div>
          <div className="project_btm">
            <div className="project_btm_left">
              <img src={image} alt="" />
              <div className="project_btm_left_overlay">
                <div className="project_btm_overlay_txt">
                  <h4>Workhub office Webflow Webflow dizayn</h4>
                  <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                  <div className="view-pr">
                    <NavLink to="/work"> Layihələrə baxın &#10141;</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="project_btm_right">
              <div className="project_btm_right_one">
                <img src={image2} alt="" />
                <div className="project_btm_right_overlay">
                  <div className="project_btm_overlay_txt low_padding">
                    <h4>Unisaas Websayt dizayn</h4>
                    <NavLink to="/work">Portfolyaya baxın &#10141;</NavLink>
                  </div>
                </div>
              </div>
              <div className="project_btm_right_two">
                <img src={image3} alt="" />
                <div className="project_btm_right_overlay">
                  <div className="project_btm_overlay_txt low_padding">
                    <h4>Unisaas websayt Dizayn</h4>
                    <NavLink to="/work">Portfolyaya baxın &#10141;</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default View