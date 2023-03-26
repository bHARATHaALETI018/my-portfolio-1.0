import React from 'react';
import profile from '../images/profile2.jpg';
import {motion} from 'framer-motion';

const About = () => {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}} 
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img initial={{x : -150, opacity : 0}} whileInView={{ x : 0, opacity : 1}} viewport={{ once:true}} transition={{duration : 1.2}}
          src={profile} alt="profile2.jpg" className='mt-28 sm:mt-20 md:mt-6 md:mb-0 w-36 h-36 flex-shrink-0 object-cover rounded-full md:rounded-lg md:w-72 md:h-96 xl:w-[400px] xl:h-[500px]'/>
        <div className='-space-y-1 px-0 flex flex-col justify-center md:px-10 md:w-auto md:h-96'>
          <h3 className='text-xl font-semibold mb-3'>Here's <span className='underline decoration-[#F7AB0A]/50'>little</span> about me!</h3>
          <div className='flex flex-col text-[12px] sm:text-sm '>
            <p>
                Hi there! <br/>I'm <span className='uppercase'>Bharath Aaleti</span>, a passionate developer with a thirst for adventure. My journey in the world of development has been filled with many exciting twists and turns, and I can't wait to see where it takes me next!. From coding my first website, I've always been fascinated by the possibilities that technology can unlock. But it's not just about work for me – I also love to explore the world around me, from hiking through rugged landscapes to trying new cuisines in far-off places. I believe that the key to success is a combination of hard work, determination, and a willingness to take risks. As a developer, I'm always looking for new challenges and opportunities to learn and grow. Whether I'm working on a cutting-edge project or exploring a new corner of the globe, I approach every task with passion, creativity, and a drive to succeed. If you're looking for a dynamic and innovative developer who's always up for an adventure, then I'm your person! Let's connect and see how we can make amazing things happen together.
            </p>
          </div>
        </div>
    </motion.div>
  )
}

export default About;