import React from 'react'
import pic from "../../public/Book Haven png.png"
import pic1 from "../../public/Vote.png"
import pic2 from "../../public/Grocery.png"
import pic3 from "../../public/E-Learning.jpg"
import pic4 from "../../public/Data Analysis.jpeg"
import pic5 from "../../public/Generative AI.jpeg"
import pic6 from "../../public/Android.jpeg"

import {motion} from "framer-motion"

function About() {

  const projects =[
    {
      name: 'Book Haven',
      description: 'Your gateway to literary treasures and immersive reading experiences.',
      technologies: 'React, Node.js, MongoDB',
      link: 'https://yourprojectlink.com',
      sourceCode: 'https://github.com/Aadi0729/MERN-Book-Haven/tree/master',
      // image: 'https://yourimagelink.com/path/to/image.jpg' // Replace with actual image link
      image : pic
    },

    {
      name: 'Online Voting System',
      description: 'Designed to facilitate secure and convenient voting processes remotely.',
      technologies: 'React, Node.js, MongoDB',
      link: 'https://yourprojectlink.com',
      sourceCode: 'https://github.com/yourusername/online-voting-system',
      // image: 'https://yourimagelink.com/path/to/image.jpg' // Replace with actual image link
      image : pic1
    },

    {
      name: 'Grocery Delivery Application',
      description: 'Facilitating seamless ordering and delivery of groceries.',
      technologies: 'React, Node.js, MongoDB',
      link: 'https://yourprojectlink.com',
      sourceCode: 'https://github.com/yourusername/online-voting-system',
      // image: 'https://yourimagelink.com/path/to/image.jpg' // Replace with actual image link
      image : pic2
    },

    {
      name: 'E-Learning Platform',
      description: 'Featuring interactive courses and real-time progress tracking.',
      technologies: 'React, Node.js, MongoDB',
      link: 'https://yourprojectlink.com',
      sourceCode: 'https://github.com/yourusername/online-voting-system',
      // image: 'https://yourimagelink.com/path/to/image.jpg' // Replace with actual image link
      image : pic3
    }
  ];


  const certifications = [
    {
      title: 'Career Essentials in Data Analysis by Microsoft & LinkedIn',
      image: pic4,
      description: 'Data Analysis, Data Visualization, Data Analytics',
    },
    {
      title: 'Career Essentials in Generative AI by Microsoft & LinkedIn',
      image: pic5,
      description: 'Computer Ethics, Generatie AI, Artificial Intelligence',
    },
    {
      title: 'Android Hackathon',
      image: pic6,
      description: 'Java, Android',
    }
  ];

  return (
    <div
    name = "About" 
    className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
     <div>
     <h1 className='text-3xl font-bold mb-5'>About</h1>
      <p className='max-w-screen-xl'>
      👋Hello! I'm Aditya Pateriya, I am a passionate full-stack developer with a strong foundation in computer science. 
      Equipped with skills in front-end and back-end development, I thrive on tackling complex challenges and delivering 
      robust solutions. Eager to contribute my technical prowess and innovative mindset to dynamic teams in the tech 
      industry.
      </p>
      <br />
      <h1 className='text-green-500 font-semibold text-xl'>
      Education
      </h1>
      <div className='bg-orange-400 shadow-md rounded-lg p-2 my-5'>
      <span className='text-slate-900 font-semibold'>
      ⮞⮞ Pursuing Bachelor of Technology in <span className='text-bold font-serif font-extrabold text-blue-800'>
        Computer Science & Engineering</span> from Amity
      University Madhya Pradesh (2021-2025) with CGPA 8.49
      </span>
      </div>

      <div className='bg-orange-400 shadow-md rounded-lg p-2 my-5'>
      <span className='text-slate-900 font-semibold'>
      ⮞⮞ Specialization in <span className='text-bold font-serif font-extrabold text-blue-800'>Data Science</span>
      </span>
      </div>

      <div className='bg-orange-400 shadow-md rounded-lg p-2 my-5'>
      <span className='text-slate-900 font-semibold'>
      ⮞⮞ Passed 12th from CBSE Board in 2020, with 90.2%
      </span>
      </div>

      <div className='bg-orange-400 shadow-md rounded-lg p-2 my-5'>
      <span className='text-slate-900 font-semibold'>
      ⮞⮞ Passed 10th from CBSE Board in 2018, with 82.6%
      </span>
      </div>

      <br />
      <br />

      <h1 className='text-green-600 font-semibold text-xl'>
        Skills
      </h1>
      {/* <span>
        Proficient in [Programming Languages] Experienced with [Software tools/ Technologies]
        Strong grasp of [Design Principles/ Concepts] Excellent problem-solving skills Effective
        communicator and collaborator.
      </span> */}

      {/* Skills Section */}
<div className='mt-8'>
  <h2 className='text-2xl font-bold text-center mb-6'>My Skills</h2>
  <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

  <div className='flex items-center space-x-4 hover:scale-105 duration-500'>
      <img src="https://img.icons8.com/?size=100&id=40669&format=png&color=000000" alt="React" className='w-14 h-14' />
      <div className='w-full'>
        <span className='block text-lg font-medium'>CPP</span>
        <div className='w-full bg-gray-200 rounded-full mt-1'>
          <div className='bg-gradient-to-r from-green-400 to-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full' style={{ width: '80%' }}>
            <span className='inline-block animate-pulse'>80%</span>
          </div>
        </div>
      </div>
    </div>

    <div className='flex items-center space-x-4 hover:scale-105 duration-500 '>
      <img src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" alt="React" className='w-14 h-14' />
      <div className='w-full'>
        <span className='block text-lg font-medium'>Python</span>
        <div className='w-full bg-gray-200 rounded-full mt-1'>
          <div className='bg-gradient-to-r from-green-400 to-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full' style={{ width: '80%' }}>
            <span className='inline-block animate-pulse'>80%</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className='flex items-center space-x-4 hover:scale-105 duration-500'>
      <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="React" className='w-14 h-14' />
      <div className='w-full'>
        <span className='block text-lg font-medium'>HTML</span>
        <div className='w-full bg-gray-200 rounded-full mt-1'>
          <div className='bg-gradient-to-r from-green-400 to-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full' style={{ width: '80%' }}>
            <span className='inline-block animate-pulse'>80%</span>
          </div>
        </div>
      </div>
    </div>

    <div className='flex items-center space-x-4 hover:scale-105 duration-500'>
      <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="React" className='w-14 h-14' />
      <div className='w-full'>
        <span className='block text-lg font-medium'>CSS</span>
        <div className='w-full bg-gray-200 rounded-full mt-1'>
          <div className='bg-gradient-to-r from-green-400 to-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full' style={{ width: '80%' }}>
            <span className='inline-block animate-pulse'>80%</span>
          </div>
        </div>
      </div>
    </div>

    <div className='flex items-center space-x-4 hover:scale-105 duration-500'>
      <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="JavaScript" className='w-14 h-14' />
      <div className='w-full'>
        <span className='block text-lg font-medium'>JavaScript</span>
        <div className='w-full bg-gray-200 rounded-full mt-1'>
          <div className='bg-gradient-to-r from-green-400 to-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full' style={{ width: '90%' }}>
            <span className='inline-block animate-pulse'>90%</span>
          </div>
        </div>
      </div>
    </div>

    <div className='flex items-center space-x-4 hover:scale-105 duration-500'>
      <img src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" alt="React" className='w-14 h-14' />
      <div className='w-full'>
        <span className='block text-lg font-medium'>MongoDB</span>
        <div className='w-full bg-gray-200 rounded-full mt-1'>
          <div className='bg-gradient-to-r from-green-400 to-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full' style={{ width: '80%' }}>
            <span className='inline-block animate-pulse'>80%</span>
          </div>
        </div>
      </div>
    </div>

    <div className='flex items-center space-x-4 hover:scale-105 duration-500'>
      <img src="https://img.icons8.com/?size=100&id=123603&format=png&color=000000" alt="React" className='w-14 h-14' />
      <div className='w-full'>
        <span className='block text-lg font-medium'>React</span>
        <div className='w-full bg-gray-200 rounded-full mt-1'>
          <div className='bg-gradient-to-r from-green-400 to-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full' style={{ width: '80%' }}>
            <span className='inline-block animate-pulse'>80%</span>
          </div>
        </div>
      </div>
    </div>

    <div className='flex items-center space-x-4 hover:scale-105 duration-500'>
      <div className='flex items-center justify-center w-14 h-12 bg-green-100 rounded-full'>
      <img src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000" alt="Node.js" className='w-14 h-14' />
      </div>
      <div className='w-full'>
        <span className='block text-lg font-medium'>NodeJs</span>
        <div className='w-full bg-gray-200 rounded-full mt-1'>
          <div className='bg-gradient-to-r from-green-400 to-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full' style={{ width: '75%' }}>
            <span className='inline-block animate-pulse'>75%</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h2 className='text-2xl text-center font-bold mb-6 mt-16 ml-8'>Overall skills summary</h2>
  <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
  <div className='flex items-center space-x-4 hover:scale-105 duration-500 '>
      <img src="https://img.icons8.com/?size=100&id=9Kvi1p1F0tUo&format=png&color=000000" alt="React" className='w-12 h-12 mt-3' />
      <div className='w-full'>
        <span className='block text-lg font-medium'>Data Science</span>
        <div className='w-full bg-gray-200 rounded-full mt-1'>
          <div className='bg-gradient-to-r from-green-400 to-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full' style={{ width: '80%' }}>
            <span className='inline-block animate-pulse'>80%</span>
          </div>
        </div>
      </div>
    </div>

    <div className='flex items-center space-x-4 hover:scale-105 duration-500 '>
      <img src="https://img.icons8.com/?size=100&id=59766&format=png&color=FFA500" alt="React" className='w-14 h-14' />
      <div className='w-full'>
        <span className='block text-lg font-medium'>Data Structures & Algorithm</span>
        <div className='w-full bg-gray-200 rounded-full mt-1'>
          <div className='bg-gradient-to-r from-green-400 to-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full' style={{ width: '80%' }}>
            <span className='inline-block animate-pulse'>80%</span>
          </div>
        </div>
      </div>
    </div>

    <div className='flex items-center space-x-4 hover:scale-105 duration-500 '>
      <img src="https://img.icons8.com/?size=100&id=104233&format=png&color=000000" alt="React" className='w-12 h-12 mt-3' />
      <div className='w-full'>
        <span className='block text-lg font-medium'>Project Management</span>
        <div className='w-full bg-gray-200 rounded-full mt-1'>
          <div className='bg-gradient-to-r from-green-400 to-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full' style={{ width: '80%' }}>
            <span className='inline-block animate-pulse'>80%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      <br />
      <br />

      <h1 className="text-green-600 font-semibold text-xl">Projects</h1>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
  {projects.map((project, index) => (
    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={project.image} alt={project.name} className="w-full h-40 object-cover" />
      <hr className="border-b-2 border-orange-950 my-0 mb-2 animate-pulse" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-gray-800">{project.name}</h2>
        <p className="text-gray-700 mb-2">{project.description}</p>
        <p className="text-gray-500 mb-4">Technologies: {project.technologies}</p>
        <div className="flex justify-between">
          <span className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transform transition duration-300 animate-pulse">
            Coming Soon
          </span>
          {project.name === "Book Haven" && (
            <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 hover:scale-105 transform transition duration-300">
              View Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  ))}
</div>
      <br />
      <br />



      <h1 className="text-3xl font-bold text-green-600 mb-4">Experience</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="bg-gradient-to-r from-blue-200 to-orange-300 shadow-md hover:bg-yellow-300 rounded-lg cursor-pointer hover:scale-105 duration-700 p-6 animate-pulse">
    <h2 className="text-xl font-semibold text-blue-800 mb-2">Full Stack Web Development Intern</h2>
    <p className="text-sm text-gray-600 mb-2">Next24tech Technologies & Services</p>
    <p className="text-sm text-gray-600 mb-4">July 2024 - August 2024 <span className='text-sm font-bold text-orange-950'>(Ongoing)</span></p>
    <ul className="list-disc list-inside">
      <li className="mb-2 text-green-950">Built an <span className="font-semibold text-blue-900">Online Voting System</span> using React, Node.js, and <span className='ml-6'>MongoDB.</span></li>
      <li className="mb-2 text-green-950">Contributed to a <span className="font-semibold text-blue-900">Grocery Delivery Application</span> for seamless <span className='ml-6'>customer experience.</span></li>
      <li className="mb-2 text-green-950">Collaborated on an <span className="font-semibold text-blue-900">E-Learning Platform</span> with interactive course <span className='ml-6'>content and progress tracking.</span></li>
    </ul>
  </div>
  <div className="bg-gradient-to-r from-yellow-300 to-purple-50 shadow-md hover:bg-yellow-300 rounded-lg cursor-pointer hover:scale-105 duration-700 p-6 animate-pulse">
    <h2 className="text-xl font-semibold text-purple-800 mb-2">Data Science Intern</h2>
    <p className="text-sm text-gray-600 mb-2">TechnoHacks EduTech</p>
    <p className="text-sm text-gray-600 mb-4">July 2023</p>
    <ul className="list-disc list-inside">
      <li className="mb-2 text-green-950">Conducted <span className="font-semibold text-purple-900">Social Media Sentiment Analysis</span> to inform <span className='ml-6'>marketing strategies.</span></li>
      <li className="mb-2 text-green-950">Developed models for <span className="font-semibold text-purple-900">Email Spam Filtering</span> using machine <span className='ml-6'>learning algorithms.</span></li>
      <li className="mb-2 text-green-950">Contributed to <span className="font-semibold text-purple-900">Churn Price Prediction</span> project utilizing statistical <span className='ml-6'>analysis.</span></li>
    </ul>
  </div>
</div>
<br />
<br />




      <h1 className='text-green-600 font-semibold text-xl'>
      Achievements and Certifications
      </h1>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        {certifications.map((certification, index) => (
          <motion.div 
            key={index}
            className='bg-white rounded-lg shadow-md overflow-hidden'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={certification.image} alt={certification.title} className='w-full h-32 object-cover' />
            <div className='p-4'>
              <h2 className='text-lg font-semibold text-gray-800'>{certification.title}</h2>
              <p className='text-gray-600 mt-2'>{certification.description}</p>
            </div>
          </motion.div>
        ))}
      </div>










      <br />
      <br />

      <h1 className='text-green-600 font-semibold text-xl'>
      Goals and Interests
      </h1>
      <br />
      <span className='text-xl font-bold'>Goals</span>
      <hr />
      <br />
      <p>
      
        <div>
          <div>
          <span>Skill Development: Continuously improve your programming skills in languages like Java, Python, or JavaScript.</span>
          </div>
          <div>
          <span>Project Experience: Gain hands-on experience through internships or personal projects to build a strong portfolio.</span>
          </div>
          <div><span>Domain Knowledge: Explore different domains within computer science (like AI/ML, cybersecurity, web development) to find your niche.</span></div>
        </div>
      </p>
      <br />

      <span className='text-xl font-bold'>Interests</span>
      <hr />
      <br />
      <p>
      <div>
          <div>
          <span>Emerging Technologies: Stay updated with the latest trends in technology such as blockchain, cloud computing, and IoT.</span>
          </div>
          <div>
          <span>Open Source Contribution: Contribute to open-source projects to collaborate with developers worldwide and gain recognition.</span>
          </div>
          <div><span>Problem Solving: Develop a passion for solving complex problems efficiently using algorithms and data structures.</span></div>
        </div>
      </p>
     </div>

    </div>
  )
}

export default About
