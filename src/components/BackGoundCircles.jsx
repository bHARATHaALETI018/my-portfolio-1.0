import React from 'react'
import {motion} from 'framer-motion'

const BackGoundCircles = () => {
  return (
    <motion.div
    intial={{
        opacity:0,
    }}
    animate={{
        scale: [1,2,2,3,3,1],
        opacity:[0.1, 0.2, 0.2, 0.8, 0.1, 0.1],
    }}
    transition={{
        duration:2.5,
    }}
     className='relative flex justify-center items-center top-20'>
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'></div>
        <div className='absolute border border-[#333333] rounded-full h-[250px] w-[250px] mt-52 first-line:'></div>
        <div className='absolute border border-[#333333] rounded-full h-[350px] w-[350px] mt-52  '></div>
        <div className='absolute border border-yellow-400 opacity-100 rounded-full h-[500px] w-[500px] mt-52 animate-pulse'></div>
        <div className='absolute border border-[#333333] rounded-full h-[600px] w-[600px] mt-52'></div>
    </motion.div>
  );
}

export default BackGoundCircles;