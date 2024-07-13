import React from 'react'

import java from "../../public/java.png"
import python from "../../public/python.png"
import html from "../../public/html.png"
import css from "../../public/css.jpg"
import mongodb from "../../public/mongodb.jpg"
import react from "../../public/react.png"
import javascript from "../../public/javascript.png"
import express from "../../public/express.png"

function Portfolio() {
  const cardItem = [
    {
      id:1,
      logo:java,
      name:"Java"
    },
    {
      id:2,
      logo:python,
      name:"Python"
    },
    {
      id:3,
      logo:html,
      name:"Html"
    },
    {
      id:4,
      logo:css,
      name:"Css"
    },
    {
      id:5,
      logo:mongodb,
      name:"MongoDB"
    },
    {
      id:6,
      logo:react,
      name:"React"
    },
    {
      id:7,
      logo:javascript,
      name:"Javascript"
    },
    {
      id:8,
      logo:express,
      name:"Express"
    }
  ]
  return (
    <div
    name="Portfolio" 
    className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
        <span className='underline font-semibold'>Working on</span>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
            {
              cardItem.map(({id, logo, name}) => {
                let description = "";
                switch(name.toLowerCase()) {
                  case 'java':
                    description = "Java is a versatile, object-oriented programming language widely used for building large-scale enterprise applications, Android apps, and server-side development. Known for its platform independence due to the Java Virtual Machine (JVM), it emphasizes stability and scalability.";
                    break;
                  case 'python':
                    description = "Python is a high-level, interpreted language known for its readability and simplicity. It is extensively used in web development, data science, artificial intelligence, machine learning, automation, and scientific computing due to its vast library support and ease of learning.";
                    break;
                  case 'html':
                    description = "HTML (HyperText Markup Language) is the standard language for creating web pages and web applications. It provides the structure of a webpage, allowing developers to define headings, paragraphs, links, images, and other elements.";
                    break;
                  case 'css':
                    description = "CSS (Cascading Style Sheets) is used to style and layout web pages. It allows developers to apply visual styles to HTML elements, such as colors, fonts, spacing, and animations, enhancing the overall user experience and aesthetic appeal of websites.";
                    break;
                  case 'mongodb':
                    description = "MongoDB is a NoSQL database known for its flexibility and scalability. It stores data in JSON-like documents, making it easy to work with complex and hierarchical data structures. MongoDB is popular for modern web applications due to its ability to handle large volumes of unstructured data.";
                    break;
                  case 'react':
                    description = "React is a JavaScript library developed by Facebook for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components and manage the state of complex applications efficiently through a virtual DOM.";
                    break;
                  case 'javascript':
                    description = "JavaScript is a high-level, dynamic programming language primarily used for adding interactivity to web pages. It is a core technology of the web, alongside HTML and CSS, and is essential for front-end development, enabling features like animations, form validation, and dynamic content updates.";
                    break;
                  case 'express':
                    description = "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies server-side development, making it easier to handle routing, middleware, and HTTP requests.";
                    break;
                  default:
                    description = "Here, I will write about the languages, frameworks & tools mentioned above.";
                }

                return (
                  <div className='md:w-[285px] md:h-[285x] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300' 
                  key={id}>
                    <img 
                      src={logo} 
                      className='w-[120px] h-[120px] p-1 rounded-full border-[2px] ml-1 mt-1' 
                      alt={name} />
                    <div>
                      <div className='px-2 font-bold text-xl mb-2 ml-1'> {name} </div>
                      <p className='mt-1 ml-1 mb-1 mr-1 px-2 text-orange-300'>{description}</p>
                    </div>
                  </div>
                )
              })
            }
        </div>
      </div>
    </div>

  )
}

export default Portfolio
