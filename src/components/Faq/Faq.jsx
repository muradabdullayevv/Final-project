import React from "react";
import "./Faq.css";
import { NavLink } from "react-router-dom";
import FaqCard from "../FaqCard";
import { faqQuestions } from "../../Data";

function Faq() {
  return (
    <div>
      <section id="faq">
        <div className="contains">
          <div class="faqs">
            <div className="faq_left">
              <h3>Tez-tez soruşulan suallar</h3>
              <NavLink to="/contactus">
                Əlavə məlumat üçün bizimlə əlaqə saxlayın
              </NavLink>
            </div>
            <div className="faq_right">
              {faqQuestions.map((item) => (
                <FaqCard {...item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
