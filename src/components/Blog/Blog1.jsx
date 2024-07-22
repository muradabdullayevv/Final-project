import { useEffect, useState } from "react";
import axios from "axios";
const URL = "https://my-json-server.typicode.com/muradabdullayevv/Final-project-server/ourBlog1";
// const URL = "http://localhost:3000/ourBlog1";
function Blog1() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    axios.get(URL).then(({ data }) => {
      setBlogData(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <div className="container">
        {blogData.length &&
          blogData.map(({ id, img, title, description, descriptions }) => {
            return (
              <section key={id} className="blog1">
                <h2>{title}</h2>
                <span>{descriptions}</span>
                <img src={img} alt="img" />
                <p>{description}</p>
              </section>
            );
          })}
      </div>
    </>
  );
}

export default Blog1;
