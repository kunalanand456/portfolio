'use client';
import HeaderLogo from './ui/headerlogo';
import Image from 'next/image'
import '@/app/css/additional-styles/theme.css'
import kunal from '@/public/images/kunalcover.jpg'

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
  
return(
  <section className="flex items-center justify-center min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div>

          {/* Section header */}
          <div className="max-w-5xl mx-auto text-center">
          
           
          </div>

          {/* Items */}
          <div className="grid gap-20">

           

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={kunal} width={550} height={550} alt="Features 02"/>
              </div>
              {/* Content */}
              <div className="max-w-2xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="word text-5xl font-bold"></div>
                  <br/>
                  <p className="text-xl text-white-400 mb-4" data-aos="fade-up">I am currently a student at <span className = 'font-bold text-purple-100'> UW Seattle</span> studying <span className = 'font-bold text-white'>Human Centered Design Engineering</span> with a focus in <span className = 'font-bold text-white'>Data Science</span><span>.</span></p>
                  <p className="text-xl text-white-400 mb-4" data-aos="fade-up">I am passionate about building products and innovation within the technical world.</p>
                  <br/>
                  <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div data-aos="fade-up" data-aos-delay="400">
              <a className="btn-sm text-white text-xl font-bold bg-black-700 border-b border-black hover:border-b-white ml-3 w-full sm:w-auto sm:ml-4" href="/work">My Work</a>
            </div>
            <br></br>
            <div data-aos="fade-up" data-aos-delay="400">
              <a className="btn-sm text-white text-xl font-bold bg-black-700 border-b border-black hover:border-b-white ml-3 w-full sm:w-auto sm:ml-4" href="https://www.linkedin.com/in/kunal-a/" target ='_blank'>Connect</a>
            </div>
          </div>
                  
                  
                </div>
              </div>
            </div>
          </div>

        </div>
    </div>
    </section>
  )
}
