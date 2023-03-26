import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion';
import Skill from './Skill';
import sanityClient from '../client.js'


const Skills = () => {

  const [skills, setSkills] = useState(null);
  async function fetchPageInfo(){
      try{
          const data = await sanityClient.fetch(`*[_type=='skill']`);
          setSkills(data);
      }catch(error){
          console.error(error);
      }
  }
  useEffect(()=>{
      fetchPageInfo();
  }, []);

  return (
    <motion.div className='relative h-screen flex flex-col justify-evenly text-center items-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen xl:space-y-0'>
        <h3 className='absolute uppercase tracking-[20px] text-gray-500 text-2xl top-20'>Skills</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] p-3 text-gray-500 text-sm mb-20'>Hover over a skill for current proficiency</h3>

        <div className='grid grid-cols-4 gap-5 mt-24 md:-mb-18 mx-auto md:grid-cols-5   '>

            {skills && skills?.slice(0, skills.length/2).map((skil)=>(
              <Skill key={skil._id} skil={skil} directionRight={1}/>
            ))}
            
            {skills && skills?.slice(skills.length/2, skills.length).map((skil)=>(
              <Skill key={skil._id} skil={skil} directionRight={0}/>
            ))}
            
        </div>
    </motion.div>
  )
}

export default Skills;