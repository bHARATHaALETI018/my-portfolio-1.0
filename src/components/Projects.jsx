import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion';
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
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>


        <div className='relative w-full top-12 overflow-x-scroll snap-x snap-mandatory flex z-40 scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-[#f7ab0a]/20' >
          { projects && projects.map((project, i)=>(
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
                  src={urlFor(project?.image).url()} className="w-sm h-sm md:w-[450px] md:h-[450px]"/>
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                  <h4 className='text-4xl font-semibold text-center'><span className='underline decoration-[#f7ab0a]/50'>Case study {i+1} of {projects.length}</span> : {project?.title}</h4>
                  {/* {projects && 
                    projects?.technologies.map((tech)=>(
                      <img className='h-10 w-10'
                      key={tech._id}
                      src={urlFor(tech.image).url()} />
                    ))
                  } */}
                  <p className='text-sm text-center md:text-left'>{project?.summary}</p>

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