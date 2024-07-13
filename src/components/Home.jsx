import React from 'react'
import {motion} from "framer-motion"

import pic from "../../public/Profile 1.png"

// All imported from React icons

import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
    <div 
    name = "Home" 
    className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
           <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
              <span className='text-xl '>Welcome In My Feed</span>
              <div className='flex space-x-2 text-2xl md:text-4xl '>
              <h1>Hello, I'm a</h1>
              {/* <span className='text-red-700 font-bold'>Developer</span> */}
              <ReactTyped
              className='text-yellow-400 font-bold'
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />

              </div>
              <br />
              <p className='text-sm md:text-md text-justify'>
              👋Hello! I'm Aditya Pateriya, a driven and detail-oriented Computer Science student seeking opportunities 
              to apply theoretical knowledge and practical skills in a dynamic professional environment
              </p>
              <br />
              {/* Social media icons */}
              <div className='flex flex-col md:flex-row justify-between space-y-6 md:space-y-0'>
              <div className='space-y-2'>
                <h1 className='font-bold'>
                    Available on 
                </h1>
                <ul className='flex space-x-5'> 
                <li>
                    <a href="https://www.instagram.com/" target='_blank'>
                    <FaInstagramSquare className='text-2xl cursor-pointer' />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/aditya-pateriya7781/" target='_blank'>
                    <FaLinkedin className='text-2xl cursor-pointer' />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Aadi0729" target='_blank'>
                    <FaGithub className='text-2xl cursor-pointer' />
                    </a>
                </li>
                <li>
                    <a href="https://t.me/" target='_blank'>
                    <FaTelegram className='text-2xl cursor-pointer' />
                    </a>
                </li>
                </ul>
              </div>

              <div className='space-y-2'>
              <h1 className='font-bold'>
                    Currently working on 
                </h1>
                <div className='flex space-x-5'> 
                    <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                    <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                    <FaReact className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                    <FaNodeJs className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
                </div>
              </div>
              </div>

              {/* Download CV button */}
            <div className='mt-6'>
              
                <div className='flex items-center'>
                
                  <span 
                    className='mt-12 px-5 py-2 text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg'>
                    Download CV
                  </span>
                  <button>
                  <a href="/Aditya Pateriya's CV.pdf" download>
                <img src="https://img.icons8.com/?size=100&id=41725&format=png&color=000000" 
                alt="" style={{ width: '30px', height: '30px', marginLeft: '5px' , marginTop:'50px', marginBottom:'4px'  }} 
                className='hover:shadow-xl hover:scale-105 transform transition duration-300' />
                </a>
                </button>
                </div>
            </div>

           </div>
           <div className='md:w-1/2 md:ml-28 md:mt-18 mt-8 order-1'>

           <div className='relative'>
            <div className='absolute inset-0 flex items-center justify-center'>
              <div className='md:w-96 md:h-96 w-96 h-96 rounded-full border-spacing-4 border-yellow-400 animate-pulse'></div>
              {/* <div className='md:w-96 md:h-96 rounded-full border-2 border-white transition duration-1000 transform hover:scale-110 animate-pulse'>
                  <div className='w-full h-full rounded-full bg-orange-400'></div>
                  </div> */}
            </div>
            
           <img 
              src={pic} 
              className='rounded-full relative z-10 w-96 h-96 ml-20 mt-6' 
              alt="" 
           />

              
           </div>

           </div>
        </div>
    </div>
    <br />
    </>
  )
}

export default Home
