import React from "react";
import "./Blog.css";
import blog1 from "../../assets/images/blog_1.png";
import blog2 from "../../assets/images/blog_2.png";
import blog3 from "../../assets/images/blog_3.png";
import { NavLink } from "react-router-dom";

function Blog() {
  return (
    <div>
      <section id="blog">
        <div className="our-blog">
          <div className="blog_head">
            <h3>Bizim blogumuz</h3>
          </div>
          <div className="blog_bttm">
            <div className="blog_item">
              <img src={blog1} alt="" />
              <h4>19 Yanvar 2023</h4>
              <h3>
                Bir Webflow istifadəçisi 14 ay ərzində tək nəfərlik məsləhətini
                0-100min dollar arasında necə artırdı
              </h3>
              <p>
                Görün Webflow-a keçid bir insanın satış strategiyasını necə
                dəyişdi və onu cəlb etməyə imkan verdi
              </p>
              <NavLink to="/readblog">Read More &#10141;</NavLink>
            </div>
            <div className="blog_item">
              <img src={blog2} alt="" />
              <h4>25 Iyul 2022</h4>
              <h3>
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h3>
              <p>
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract
              </p>
              <NavLink to="/readblog">Read More &#10141;</NavLink>
            </div>
            <div className="blog_item">
              <img src={blog3} alt="" />
              <h4>13 sentyabr 2024</h4>
              <h3>
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h3>
              <p>
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract
              </p>
              <NavLink to="/readblog">Read More &#10141;</NavLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
