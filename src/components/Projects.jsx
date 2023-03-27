import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion';
import { BrowserRouter, Link } from 'react-router-dom';
import sanityClient from '../client.js'
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const Projects = () => {
  const [projects, setProjects] = useState([]);
    async function fetchPageInfo(){
        try{
            const data = await sanityClient.fetch(`*[_type=='project']{
              ...,
              technologies[]->
            }`);
            setProjects(data);
        }catch(error){
            console.error(error);
        }
    }
    useEffect(()=>{
        fetchPageInfo();
    }, []);

// const projs = [1,2,3,4,5];
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}} className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full mx-auto z-40 justify-center items-center '>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>


        <div className='relative w-full top-16 overflow-x-scroll md:overflow-x-scroll snap-x snap-mandatory flex z-40 scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-[#f7ab0a]/20' >
          { projects && projects.map((project, i)=>(
              <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-0 md:space-y-3 items-center justify-center p-14 md:p-44 h-screen'>
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
                  src={urlFor(project?.image).url()} className="w-[360px] h-[200px] xl:w-[500px] xl:h-[300px] rounded-xl  "/>
                <div className='space-y-3 px-0 md:px-10 max-w-6xl'>
                  <h4 className='text-2xl sm:text-2xl font-semibold text-center'><span className='underline decoration-[#f7ab0a]/50'>Project {i+1} of {projects.length}</span> :    
                    <a href={project?.linkToBuild} target={"_blank"} className="transition-all hover:border hover:text-[#f7ab0a] p-1 rounded-xl mx-6">  {project?.title} </a>
                  </h4>
                  <div className='flex flex-row justify-center items-center gap-x-6  '>
                  {project && project?.technologies.map((tech)=>(
                      <img 
                          className='h-10 w-10 rounded-full object-cover'
                          key={tech._id}
                          src={urlFor(tech.image).url()} 
                      />))
                  }</div>
                  <p className='text-[12px] md:text-sm text-center md:text-left '>{project?.summary}</p>
                </div>
              </div>
            ))
          }
        </div>

        <div className='w-full absolute top-[30%] bg-[#f7ab0a]/10 h-[250px] md:h-[400px] left-0 skew-y-6  '></div>
    </motion.div>
  );
}

export default Projects;