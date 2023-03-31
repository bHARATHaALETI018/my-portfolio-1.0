import React from 'react'
import {useState, useEffect} from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter } from "react-router-dom";
import sanityClient from "../client.js";

const Header = () => {
    const [socials, setSocials] = useState([]);
    const [resume, setResume] = useState(null);

    async function fetchSocials() {
      try {
        const data = await sanityClient.fetch(`*[_type == 'social']`);
        setSocials(data);
      } catch (error) {
        console.error(error);
      }
    }
    async function fetchResume(){
        try{
            const data = await sanityClient.fetch(`*[_type=='pageInfo'][0].resume`);
            setResume(data);
        }catch(error){
            console.error(error);
        }
    }
    useEffect(() => {
      fetchSocials();
      fetchResume();
    }, []);
  return (
    <header className='sticky top-0 p-3 flex items-start justify-between max-w-7xl mx-auto z-50 xl:items-center'>
        <motion.div
            initial={{
                x:-500,
                opacity:0,
                scale:3.6,
            }}
            animate={{
                x:0,
                opacity:1,
                scale:1,
            }}
            transition={{
                duration:1.5,
            }}
        className='flex flex-row items-center'>
            {
                socials && socials.map((social)=>(
                    <SocialIcon 
                    key={social._id}  
                    url={social.url} fgColor='gray' 
                    target={'_blank'} bgColor='transparent'/>        
                ))
            }
            
        </motion.div>
        <motion.div
        initial={{
            x:500,
            opacity:0,
            scale:5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{
            duration:1.5,
        }} className='flex flex-row items-center text-gray-500 cursor-pointer'>
            { 
              resume &&  <a target={'_blank'} href={resume} rel="noopener noreferrer" className='uppercase text-[1rem] tracking-[3px] text-gray-500'>Resume</a>
            }
            <BrowserRouter>
                <HashLink to='#contact'>
                    <SocialIcon network='email' fgColor='gray' bgColor='transparent' className='cursor-pointer'/>
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-500'>Get In Touch</p>
                </HashLink>
            </BrowserRouter>
        </motion.div>
    </header>
  )
}

export default Header;