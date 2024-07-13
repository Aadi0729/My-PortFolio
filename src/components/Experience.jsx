import React from 'react'

import html from "../../public/html.png"
import css from "../../public/css.jpg"
import mongodb from "../../public/mongodb.jpg"
import react from "../../public/react.png"
import javascript from "../../public/javascript.png"
import express from "../../public/express.png"
import postman from "../../public/postman.png"

function Experience() {
  const cardItem = [
    {
      id:1,
      logo:html,
      name:"Html"
    },
    {
      id:2,
      logo:css,
      name:"Css"
    },
    {
      id:3,
      logo:mongodb,
      name:"MongoDB"
    },
    {
      id:4,
      logo:react,
      name:"React"
    },
    {
      id:5,
      logo:javascript,
      name:"Javascript"
    },
    {
      id:6,
      logo:express,
      name:"Express"
    },
    {
      id:7,
      logo:postman, 
      name:"Postman"
    }
  ]
  return (
    <div
    name = "Experience" 
    className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Experience</h1>
        <span>
            <div>
            <h1>
                <span className='underline font-semibold text-xl text-gray-300'>Project:</span>
                <span className='font-semibold text-xl text-orange-300'> Book Haven</span>
            </h1>
            <br />
            <p className=''>Developed a full-stack web application for managing book sales and inventory.</p>
            <br />
            <p>1) Designed and implemented the front end using HTML, CSS, and React.</p>
            <p>2) Created RESTful APIs with Node.js and Express for backend services.</p>
            <p>3) Integrated MongoDB for database management.</p>
            <p>4) Implemented a recommendation system using collaborative filtering.</p>
            <br />
            <p>Below are some of the <span className='font-bold text-bold text-yellow-500'>languages</span> & <span className='font-bold text-bold text-yellow-500'>frameworks</span> used:</p>
            <br />
            </div>
        </span>
        <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
            {
              cardItem.map(({id, logo, name}) => (
                <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-105 duration-300' 
                key={id}>
                  <img 
                    src={logo} 
                    className=' w-[150px] rounded-full ml-1 mt-1' 
                    alt="" />
                  <div>
                    <div 
                       className=''> 
                       {name} 
                    </div>
                  </div>
                </div>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Experience
