import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion';
import sanityClient from '../client.js'
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const About = () => {
  const [pageinfo, setPageinfo] = useState(null);
    async function fetchPageInfo(){
        try{
            const data = await sanityClient.fetch(`*[_type=='pageInfo'][0]`);
            setPageinfo(data);
        }catch(error){
            console.error(error);
        }
    }
    useEffect(()=>{
        fetchPageInfo();
    }, []);

  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once:false}} transition={{duration:2}} 
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        {pageinfo &&  <motion.img initial={{x : -150, opacity : 0}} whileInView={{ x : 0, opacity : 1}} viewport={{ once:false}} transition={{duration : 1.2}}
            src={urlFor(pageinfo?.profilePic).url()} alt="profile2.jpg" className='mt-24 sm:mt-20 md:mt-6 md:mb-0 w-36 h-36 flex-shrink-0 object-cover rounded-full md:rounded-lg md:w-72 md:h-96 xl:w-[400px] xl:h-[500px]'/>
        }
        <div className='-space-y-1 px-0 flex flex-col justify-center md:px-10 md:w-auto md:h-96'>
          <h3 className='text-xl font-semibold mb-3'>Here's <span className='underline decoration-[#F7AB0A]/50'>little</span> about me!</h3>
          <div className='flex flex-col text-[12px] sm:text-sm '>
            {pageinfo && <p> {pageinfo?.backgroundInformation}</p>}
          </div>
        </div>
    </motion.div>
  )
}

export default About;