import React from 'react'
import testproj from '../images/testproj.png'
import {motion} from 'framer-motion';

const Projects = () => {
  const projs = [1,2,3,4,5];
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}} className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full mx-auto z-0 justify-center items-center '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>


        <div className='relative w-full top-12 overflow-y-hidden overflow-x-scroll snap-x snap-mandatory flex z-20 scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-[#f7ab0a]/20' >
          {
            projs.map((project, i)=>(
              <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                <motion.img 
                initial={{
                  opacity:0,
                  y:-200
                }}
                whileInView ={{
                  opacity:1,
                  y:1,
                }}
                transition={{duration:1.2}}
                viewport={{once:true}}
                  src={testproj}/>
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                  <h4 className='text-4xl font-semibold text-center'><span className='underline decoration-[#f7ab0a]/50'>Case study {i+1} of {projs.length}</span> : ProjectX{i+1}</h4>

                  <p className='text-sm text-center md:text-left'>
                  Sequi, debitis veniam. Perspiciatis laborum porro, quod tenetur, fuga minus odit maiores magni temporibus sequi blanditiis dolores at, quis adipisci. Recusandae magnam minima facere excepturi voluptas reiciendis voluptatum suscipit ipsa?
                  Sunt quisquam animi optio earum quibusdam. At placeat facilis mollitia vero, reiciendis rerum sapiente repellat eos exercitationem facere maxime aut dignissimos eius cum vitae asperiores dolor hic quas aliquid quaerat.</p>

                </div>
              </div>
            ))
          }
        </div>

        <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 h-[300px] md:h-[450px] left-0 -skew-y-12'></div>
    </motion.div>
  );
}

export default Projects;