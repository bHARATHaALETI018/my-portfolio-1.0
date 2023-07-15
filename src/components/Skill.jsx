import React from 'react'
import {motion} from 'framer-motion';
import sanityClient from '../client.js'
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const ExampleSkill = (props) => {
  return (
    <div className='group flex cursor-pointer relative snap-center'>
        {props.skil && <motion.img 
            initial={{x: props.directionRight? 250 : -250, opacity:0}}
            transtion={{duration : 1,}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:false}}
            src={urlFor(props.skil?.image).url()} alt="html" 
            className='rounded-full border border-gray-500 w-20 h-20 object-cover md:w-24 md:h-24 filter group-hover:grayscale transition duration-300 ease-in-out'
        />}
        <div className='absolute opacity-0 w-20 h-20 rounded-full hover:bg-white md:w-24 md:h-24  opacity-1 group-hover:opacity-60 translate duration-300 ease-in-out'>
            <div className='flex justify-center items-center h-full'>
                {props.skil && <p className='text-3xl text-black font-bold opacity-100'>{props.skil?.progress}*</p>}
            </div>
        </div>
    </div>
  )
}

export default ExampleSkill;
