import React, {useState, useEffect} from "react";
import BlogCard from "../components/BlogCard";

import './Blog.css'

import imgBlog1 from '../assets/imagens/blog_image_1.svg'
import imgBlog2 from '../assets/imagens/bloco_image_2.svg'
import imgBlog3 from '../assets/imagens/bloco_image_3.svg'
import imgBlog4 from '../assets/imagens/bloco_image_4.svg'

import imgKevin from '../assets/imagens/kevinPhoto.svg'
import imgMike from '../assets/imagens/mikePhoto.svg'
import imgBryan from '../assets/imagens/bryanPhoto.svg'
import imgJoshua from '../assets/imagens/joshuaPhoto.svg'

import arrow from '../assets/imagens/arrow.svg'



export default ()=> {
    const [scrollX, setscrollX] = useState(0)
    

    const handleRightArrow = () => {
        let widthCard = window.innerWidth < 691 ? 245 : 400

        let x = scrollX - Math.round(window.innerWidth / 1.5)
        let listW = 7 * widthCard;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60
        }
        setscrollX(x)
    }

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 1.5)
        if(x > 0){
            x = 0
        } 
        setscrollX(x)
    }
   

    return(
       <section className="blog">
            <h3>Read Our Blog</h3>
           <p>Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.</p>
           <div className="blogGroup">

            
                {scrollX != 0 && (
                    <div className="blogRow--left" onClick={ e=> handleLeftArrow()}>
                    <img src={arrow} alt="" />
                    </div> 
                )}
                    
            
            <div className="blogRow--right" onClick={ e => handleRightArrow()} >
            <img src={arrow} alt="" />
            </div>

                <div className="blogRow-list" id="blogRow--list"
                  style={{
                    marginLeft: scrollX,
                    width: '100%'
                }}  >
                    <BlogCard title='Quick-strat guide to nuts and seeds' authorName='Kevin ibrahim' imgBlog={imgBlog1} imgAuthor={imgKevin}/>
                    <BlogCard title='Nutrition: Tips for Improving Your Health' authorName='Mike Jackson' imgBlog={imgBlog2} imgAuthor={imgMike}/>
                    <BlogCard title='The top 10 benefits of eating health' authorName='Bryan McGregor' imgBlog={imgBlog3} imgAuthor={imgBryan}/>
                    <BlogCard title='What Makes a Healthy Diet?' authorName='Joshua' imgBlog={imgBlog4} imgAuthor={imgJoshua}/>
                    <BlogCard title='Quick-strat guide to nuts and seeds' authorName='Kevin ibrahim' imgBlog={imgBlog1} imgAuthor={imgKevin}/>
                    <BlogCard title='Nutrition: Tips for Improving Your Health' authorName='Mike Jackson' imgBlog={imgBlog2} imgAuthor={imgMike}/>
                    <BlogCard title='The top 10 benefits of eating health' authorName='Bryan McGregor' imgBlog={imgBlog3} imgAuthor={imgBryan}/>
                    
                </div>
           </div>
       </section>
    )
}
