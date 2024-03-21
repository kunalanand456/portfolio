'use client';

import React, { useEffect } from 'react';
import $ from 'jquery';
import '@/app/css/additional-styles/theme.css';

export default function HeroHome() {
    useEffect(() => {
        const words = ['Hello.'];
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
            <div className="max-w-8xl mx-auto px-4 sm:px-6 flex justify-center items-center">
                <div className="pb-12 md:pb-20">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="word text-7xl font-bold"></div>
                        <br />
                        <br />
                       <p className="text-xl text-white-400 mb-8" data-aos="fade-up" data-aos-delay="200">
                            My name is <span className='font-bold text-2xl'>Kunal</span>, and I am currently a student at <span className='font-bold text-purple-100'>UW Seattle</span>, interested in the intersection of <span className='font-bold text-white'>Software Engineering</span> and  <span className='font-bold text-white'>Design</span>.
                        </p>
                    </div>
                    <br />
                    <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                        <div data-aos="fade-up" data-aos-delay="400">
                            <a className="btn-sm text-white text-xl font-bold bg-black-700 border-b border-black hover:border-b-white ml-3 w-full sm:w-auto sm:ml-4" href="/work">Work</a>
                        </div>
                        <br></br>
                        <div data-aos="fade-up" data-aos-delay="400">
                            <a className="btn-sm text-white text-xl font-bold bg-black-700 border-b border-black hover:border-b-white ml-3 w-full sm:w-auto sm:ml-4" href="https://www.linkedin.com/in/kunal-a/" target = '_blank'>Connect</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
