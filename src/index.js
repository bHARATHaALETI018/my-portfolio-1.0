import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactMe from './components/ContactMe';
import { BrowserRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {BackwardIcon} from '@heroicons/react/24/solid'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-500/20 scrollbar-thumb-[#f7ab0a]/30 '>
      <Header/>
      <section id='hero' className='snap-center'>
        <Hero/>
      </section>
      <section className='snap-center' id="about">
        <About/>
      </section>
      <section className='snap-center' id='skills'>
        <Skills />
      </section>
      <section className='snap-start' id='projects'>
        <Projects />
      </section>
      <section className='snap-start' id='contact'>
        <ContactMe />
      </section>
      <BrowserRouter>
      <HashLink to='#hero'>
          <footer className='sticky bottom-5 w-full cursor-pointer z-50'>
            <div className='flex flex-row items-center justify-center'>
              <BackwardIcon className=' w-9 h-9'/>
              <p className='uppercase text-sm text-gray-500'>Back to homepage</p>
            </div>
          </footer>
        </HashLink>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);