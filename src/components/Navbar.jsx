import React, { useState } from 'react'
import pic from "../../public/Top R Pic.png"
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from "react-scroll"

function Navbar() {
    const [menu, setMenu] = useState(false);
    const navItems = [
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Experience"
        },
        {
            id:5,
            text:"Contact"
        }
    ]
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-yellow-100'>
        <div className='flex justify-between items-center h-16'>
            <div className='flex space-x-2'>
                <img src={pic} className='h-12 w-12 rounded-full mt-1' alt="" />           
                <h1 className='font-semibold text-xl text-blue-900 cursor-pointer'>
                    Adity<span className='text-orange-800 text-xl'>a</span>
                <p className='text-sm text-green-700'>Web Developer</p>
                </h1>
            </div>

            {/* Desktop Navbar */}

            <div>
                <ul className='hidden md:flex space-x-8 text-blue-950'>
                    {
                        navItems.map(({id, text}) =>(
                            <li 
                            className='hover:scale-105 duration-200 cursor-pointer'
                            key={id}> 
                            <Link to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass = "active"
                            >
                              {text}
                            </Link> 
                            </li>
                        ))
                    }
                </ul>
                <div onClick={()=>setMenu(!menu)} className='md:hidden' > 
                    { menu ? <IoCloseSharp className="text-slate-900" size={24} /> : <AiOutlineMenu className='text-slate-900' size={24} /> }
                </div>
            </div>
        </div>

        {/* Mobile Navbar */}
        {
            menu && (
                <div className='bg-blue-950'>
            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
                {
                    navItems.map(({id, text}) =>(
                        <li 
                        className='hover:scale-105 duration-200 cursor-pointer text-white'
                        key={id}>
                            <Link   
                                onClick={()=>setMenu(!menu)}
                            to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass = "active"
                            >
                              {text}
                            </Link>  
                        </li>
                    ))
                }
            </ul>
        </div>
            )
        }
    </div>
    </>
  )
}

export default Navbar
