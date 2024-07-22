import React from "react";
import Blog1 from "./Blog1";
import OurBlog from "./OurBlog";

function BlogMain() {
  return (
    <>
    <div className="contain" data-aos="fade-left"> 
      <Blog1 />
      <OurBlog />
      </div>
    </>
  );
}

export default BlogMain;
