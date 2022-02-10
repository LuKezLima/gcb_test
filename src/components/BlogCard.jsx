import React from "react";
import './BlogCard.css'

export default ({imgBlog, title, authorName, imgAuthor})=> {
    return(
     <div className="blog-item" id="blogId">
         <img src={imgBlog} alt=""/>
         <h3>{title}</h3>
         <div className="authorInfo">
             <img src={imgAuthor} className="imgAuthor" alt="author´s photo" />
             <p>{authorName}</p>
         </div>
     </div>
    )
}