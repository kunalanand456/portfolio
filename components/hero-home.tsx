'use client';

import React, { useEffect } from 'react';
import $ from 'jquery';
import '@/app/css/additional-styles/theme.css';

export default function HeroHome() {
  useEffect(() => {
    const words = ['Hello!'];
    let part;
    let offset = 0;
    const speed = 100;
  
    const spellWord = () => {
      part = words[0].substring(0, offset + 1);
  
      if (offset <= words[0].length) {
        $('.word').text(part);
        offset++;
        if (offset <= words[0].length) {
          setTimeout(spellWord, speed);
        }
      }
    };
  
    spellWord(); 
  }, []);
  

  return (
    <section className="relative min h-screen flex items-center justify-center">
      {/* Background image */}
      {/* Hero content */}
    
      <div className="max-w-8xl mx-auto px-4 sm:px-6  flex justify-center items-center">
        <div className=" pb-12  md:pb-20">
          <div className="max-w-2xl mx-auto text-center">
                <div className="word text-5xl font-bold"></div>

            <br/>
            <p className="text-xl text-white-400 mb-8" data-aos="fade-up" data-aos-delay="200">My name is <span className='font-bold text-2xl'>Kunal</span>, and I'm an aspiring engineer interested in the intersection of Software Engineering and Design.</p>
          </div>
          <br/>
          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div data-aos="fade-up" data-aos-delay="400">
              <a className="btn-sm text-white text-lg font-bold bg-black-700 border-b border-black hover:border-b-white ml-3 w-full sm:w-auto sm:ml-4" href="/work">My Work</a>
            </div>
            <br></br>
            <div data-aos="fade-up" data-aos-delay="400">
              <a className="btn-sm text-white text-lg font-bold bg-black-700 border-b border-black hover:border-b-white ml-3 w-full sm:w-auto sm:ml-4" href="/about">About</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
