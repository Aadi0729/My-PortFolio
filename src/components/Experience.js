import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {

  const ref = useRef(null);

  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[68%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl flex flex-col sm:text-xl xs:text-lg'> {position}&nbsp;<a href={companyLink}
          target='_blank'
          className='text-primary dark:text-primaryDark capitalize'>@{company}</a></h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 mt-2 xs:text-sm'>
          {time} | {address}
        </span>
        <p className='font-medium w-full mt-2 md:text-sm'>
          {work}
        </p>
      </motion.div>
    </li>
  );
}

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  );

  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 20,
    mass: 0.5
  });

  const scaleY = useTransform(smoothScrollYProgress, [0, 1], [0, 1]);
  const height = useTransform(smoothScrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-[full]">

        <motion.div
          style={{
            scaleY,
            height,
            originY: 0,
            position: 'absolute',
            top: 0,
          }}
          className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]
          '/>

        <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details

            position='FullStack Web Developer Intern' company='Next24tech'
            companyLink='https://www.linkedin.com/company/next24tech-technology-services/posts/?feedView=all'
            time='July 2024 - Aug 2024' address='Nagpur'
            work='Collaborated in the development and maintenance of web applications, focusing on both front-end and back-end components.
            Utilized technologies such as JavaScript, MongoDB, Express, and various UI libraries.
            Implemented responsive and intuitive user interfaces, ensuring enhanced user experience.
            Assisted in debugging, testing, and optimizing application performance.'

          />

          <Details

            position='Data Science Intern' company='TechnoHacks EduTech'
            companyLink='https://www.linkedin.com/company/technohacks-edutech/'
            time='July 2023 - Aug 2023' address='Nashik'
            work='As a Data Science Intern at TechnoHacks EduTech, I had the opportunity to work on real-world projects, gaining hands-on experience in data analytics and machine learning. During my internship, I focused on tasks such as Social Media Sentiment Analysis, Email Spam Filtering, and Churn Price Prediction.'

          />

          <Details

            position='Agnirva Space Intern' company='ISRO'
            companyLink='https://www.linkedin.com/company/agnirva/posts/?feedView=all'
            time='July 2024 - Sept 2024' address='Bengaluru'
            work='The Agnirva Space Internship Program offers a unique opportunity to delve into the vast and complex fields of space science and data analytics. Throughout the program, participants are exposed to the latest advancements in space research, focusing on how big data is revolutionizing our understanding of the universe.'

          />

        </ul>
      </div>
    </div>
  )
}

export default Experience
