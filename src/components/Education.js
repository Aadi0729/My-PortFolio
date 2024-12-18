import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {

  const ref = useRef(null);

  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[68%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>

    <LiIcon reference={ref} />
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <h3 className='capitalize font-bold text-2xl flex flex-col sm:text-xl xs:text-lg'>
        {type}
      </h3>
      <span className='capitalize font-medium text-dark/75 dark:text-light/75 mt-2 xs:text-sm'>
        {time} | {place}
      </span>
      <p className='font-medium w-full mt-2 md:text-sm'>
        {info}
      </p>
    </motion.div>
  </li>
}

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll(
    {
      target: ref,
      offset: ["start end", "center center"]
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
        Education
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

            type='Bachelor Of Technology In Computer Science & Engineering'
            time='2021-2025'
            place='Amity University Madhya Pradesh'
            info='Relevant courses included such as Data Structures & Algorithm, Data Science, Operating System, 
            DataBase Mangement System and Computer Networks.'
          />

          <Details

            type='Class 12th (Senior Secondary Education)'
            time='2020'
            place='Christ Convent School Patna Bujurg, Rehli, Sagar, M.P.'
            info='Relevant courses included such as Physics, Chemistry, Mathematics, English and Hindi.'
          />

          <Details

            type='Class 10th (Secondary Education)'
            time='2018'
            place='Christ Convent School Patna Bujurg, Rehli, Sagar, M.P.'
            info='Relevant courses included such as Mathematics, Science, Social Science, English and Hindi.'
          />
        </ul>
      </div>
    </div>
  )
}

export default Education