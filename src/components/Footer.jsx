import React from 'react'
import { FaInstagramSquare, FaTelegram, FaLinkedin, FaGithub } from 'react-icons/fa'
function Footer() {
  return (
    <>
    <hr />
    <footer className='py-12'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
            <div className='flex flex-col items-center justify-center '>
                <ul className='flex space-x-4 '>
                    {/* <FaInstagramSquare size={24} />
                    <FaLinkedin size={24} />
                    <FaGithub size={24} />
                    <FaTelegram size={24} /> */}
                    <li>
                    <a href="https://www.instagram.com/" target='_blank'>
                    <FaInstagramSquare size={24} className='text-2xl cursor-pointer' />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/" target='_blank'>
                    <FaLinkedin size={24} className='text-2xl cursor-pointer' />
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com/" target='_blank'>
                    <FaGithub size={24} className='text-2xl cursor-pointer' />
                    </a>
                </li>
                <li>
                    <a href="https://t.me/" target='_blank'>
                    <FaTelegram size={24} className='text-2xl cursor-pointer' />
                    </a>
                </li>
                </ul>
                <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'></div>
                <p className='text-sm' >&copy; 2024 Your Company. All rights reserved.</p>
                <p className='text-sm' >Supportive Partner ❤️ Aditya</p>
            </div>
        </div>

        
    </footer>
    </>
  )
}

export default Footer
