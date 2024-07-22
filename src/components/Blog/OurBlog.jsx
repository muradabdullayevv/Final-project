import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
const URL = "https://my-json-server.typicode.com/muradabdullayevv/Final-project-server/ourBlog2";
// const URL = "http://localhost:3000/ourBlog2";
function OurBlog() {
  const [blogFile, setBlogFile] = useState([]);
  useEffect(() => {
    axios
      .get(URL)
      .then(({ data }) => {
        setBlogFile(data);
        console.log(data);
      })
      .catch(() => {
        console.log("Salam Qadan alim");
      });
  }, []);
  return (
    <>
      <div className="container">
        <section className="blog2">
          <h2>Bizim Blog</h2>
          <div className="cards">
            {blogFile.length &&
              blogFile.map(({ id, date, title, img, descriptions }) => {
                return (
                  <div key={id} className="card">
                    <img src={img} alt="img" />
                    <p className="p1">{date}</p>
                    <h6>{title}</h6>
                    <p className="p2">{descriptions}</p>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    </>
  );
}

export default OurBlog;
