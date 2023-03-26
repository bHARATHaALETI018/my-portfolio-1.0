import React, {useState, useEffect} from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { BrowserRouter } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import BackGoundCircles from './BackGoundCircles';
import sanityClient from '../client.js'
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const Hero = () => {
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

    const [text] = useTypewriter({
        words: [
            "Hi, I'm Bharath Aaleti",
            "But you can call me Bharath😄",
            `${pageinfo?.typewriter3}`,
            `${pageinfo?.typewriter4}`
        ],
        loop: true,
        delaySpeed: 1500,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden mt-20'>
        <BackGoundCircles />
        {
            pageinfo && (<img 
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                src={urlFor(pageinfo?.heroImage).url()} alt="profileImage" 
            />
        )}
        <div className='z-20'>
            { pageinfo && (<h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageinfo?.role}</h2> )}
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