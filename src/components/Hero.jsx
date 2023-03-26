import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { BrowserRouter } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import BackGoundCircles from './BackGoundCircles';
import profile from '../images/profile.jpg'

const Hero = () => {
    const [text] = useTypewriter({
        words: [
            "Hi names Bharath Aaleti",
            "Guy-who-love-adventure.jsx",
            "<SANATANA DHARMA/>"
        ],
        loop: true,
        delaySpeed: 1500,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden mt-20'>
        <BackGoundCircles />
        <img 
            className="relative rounded-full h-32 w-32 mx-auto object-cover"
            src={profile} alt="profileImage" 
        />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Developer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span>{text}</span>
                <Cursor cursorStyle='$' cursorColor='#F7AB0A'/>
            </h1>
            <BrowserRouter>
                <div className='pt-5'>
                    <HashLink to='#about'><button className='px-6 py-2 cursor-pointer border-[#f2d47a] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all  hover:text-[#F7AB0A]/40 hover:border-white'>About</button></HashLink>
                    <HashLink to='#skills'><button className='px-6 py-2 cursor-pointer border-[#f2d47a] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all  hover:text-[#F7AB0A]/40 hover:border-white '>Skills</button></HashLink>
                    <HashLink to='#projects'><button className='px-6 py-2 cursor-pointer border-[#f2d47a] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all  hover:text-[#F7AB0A]/40 hover:border-white'>Projects</button></HashLink>
                    <HashLink to='#contact' ><button className='px-6 py-2 cursor-pointer border-[#f2d47a] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all  hover:text-[#F7AB0A]/40 hover:border-white'>contact</button> </HashLink>
                </div>
            </BrowserRouter>
        </div>
    </div>
  )
}

export default Hero;