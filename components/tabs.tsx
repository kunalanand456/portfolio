'use client'

import { useRef, useState, useEffect } from 'react'

import Image from 'next/image'
import { Transition } from '@headlessui/react'
import TabsImage01 from '@/public/images/tabs-image-01.jpg'
import HeroImage01 from '@/public/images/hero-image-01.jpg'
import CleverTap from '@/public/images/CleverTap.svg'
import M2 from '@/public/images/m2.png'
import GoEzz from '@/public/images/goezz.jpg'
import dealpad from '@/public/images/dealpad.jpg'
import viddl from '@/public/images/logo-viddl.svg'
import LifePattern from '@/public/images/lifepattern.png'
export default function Tabs() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section>
      <br></br>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12" data-aos-id-tabs>
            <h2 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">My Experience</h2>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-tabs]">With a passion for engineering and building products, I've navigated through multiple industries, leveraging the latest technology to deliver impactful solutions. </p>
          </div>
          {/* Section content */}
          <div>

            {/* Tabs buttons */}
            <div className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
            <button
                className={`flex items-center font-bold py-2 px-4 m-2 bg-black-800 group transition duration-500 border-b-2 border-transparent ${tab === 1? 'border-white' : 'opacity-100'}`}
                onClick={() => setTab(1)}
              >
                <span className="text-purple-300 text-lg font-bold group-hover:text-blue-150 transition-colors duration-150 ease-in-out">LifePattern.AI</span>
              </button>
            <button
                className={`flex items-center font-bold py-2 px-4 m-2 bg-black-800 group transition duration-500 border-b-2 border-transparent ${tab === 2 ? 'border-white' : 'opacity-100'}`}
                onClick={() => setTab(2)}
              >
                <span className="text-blue-400 text-lg font-bold group-hover:text-blue-200 transition-colors duration-150 ease-in-out">dealpad</span>
              </button>
              <button
                className={`flex items-center font-bold py-2 px-4 m-2 bg-black-800  group transition duration-500 border-b-2 border-transparent ${tab === 3 ? 'border-white' : 'opacity-100'}`}
                onClick={() => setTab(3)}
              >
                <span className="text-blue-600 text-lg font-bold group-hover:text-blue-500 transition-colors duration-150 ease-in-out">M2 Information Systems</span>
              </button>
              <button
                className={`flex items-center font-bold py-2 px-4 m-2 bg-black-800  group transition duration-500 border-b-2 border-transparent ${tab === 4 ? 'border-white' : 'opacity-100'}`}
                onClick={() => setTab(4)}
              >
                <span className="text-green-400 text-lg font-bold group-hover:text-green-200 transition-colors duration-150 ease-in-out">GoEzz</span>
              </button>
              <button
                className={`flex items-center font-bold py-2 px-4 m-2 bg-black-800  group transition duration-500 border-b-2 border-transparent ${tab === 5 ? 'border-white' : 'opacity-100'}`}
                onClick={() => setTab(5)}
              >
                <span className="text-red-600 text-lg font-bold group-hover:text-red-400 transition-colors duration-150 ease-in-out">CleverTap</span>
              </button>
              <button
                className={`flex items-center font-bold py-2 px-4 m-2 bg-black-800  group transition duration-500 border-b-2 border-transparent ${tab === 6 ? 'border-white' : 'opacity-100'}`}
                onClick={() => setTab(6)}
              >
                <span className="text-pink-500 text-lg font-bold group-hover:text-pink-400 transition-colors duration-150 ease-in-out">Viddl</span>
              </button>
            </div>

            {/* Tabs items */}
            <div className="transition-all">
              <div className="relative flex flex-col mt-16" data-aos="fade-up" ref={tabs}>

                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                      <Image className="w-full h-full object-contain" src={LifePattern} width={300} alt="Tabs 01" />
                    </figure>

                    <div className="relative bg-black py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                      <h4 className="h4 mb-2">Software Engineer Intern</h4>
                      <p className="text-lg text-gray-400">LifePattern.AI provides an AI-driven platform for personal growth and health, merging journaling and goal-setting with smart insights to enhance individual well-being and life patterns.</p> <br />
                      <p className="text-lg "> At <span className='font-bold'>LifePattern.AI</span>, I am interning as the lead developer in a dynamic team of four, driving the development of a web-based journey creation tool, leveraging my expertise in NextJS, NestJS, and React Native to deliver a cross-platform user experience. </p>
                      <br />
                      <ul className="flex flex-wrap text-sm text-gray-400 -mx-2 -my-2">
                        <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="[data-aos-id-cta]">
                          <svg className="w-3 h-3 text-blue mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="5" fill="purple" />
                          </svg>
                          <p className="font-bold text-purple-500">Web Development</p>
                        </li>
                        <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="[data-aos-id-cta]">
                          <svg className="w-3 h-3 text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="5" fill="cyan" />
                          </svg>
                          <p className="font-bold text-cyan-500">AI Development and Testing</p>
                        </li>
                      </ul>
                      <a className="btn-sm text-white bg-purple-300 rounded hover:bg-blue-200 mt-6" href="https://www.lifepattern.ai/" target='_blank'>
                        <span className="text-m font-bold text-left">LifePattern.AI</span>
                      </a>
                    </div>

                  </article>
                </Transition>

                <Transition
                  show={tab === 5}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                      <Image className="w-full h-full object-contain" src={CleverTap} width={300} alt="Tabs 01" />
                    </figure>

                    <div className="relative bg-black py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                      <h4 className="h4 mb-2">Software Engineer Intern</h4>
                      <p className="text-lg text-gray-400">CleverTap is a leading SaaS-based mobile analytics and marketing automation company</p> <br />
                      <p  className="text-lg"> At <span className='font-bold'>CleverTap</span>, I developed mobile applications for iOS and Android using Swift and Java, integrating the CleverTap SDK to track and
                        analyze user interactions within the application. </p>
                      <br />
                      <ul className="flex flex-wrap text-sm text-gray-400 -mx-2 -my-2">
                        <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="[data-aos-id-cta]">
                          <svg className="w-3 h-3 text-blue mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="5" fill="blue" />
                          </svg>
                          <p className="font-bold text-blue-500">iOS Development</p>
                        </li>
                        <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="[data-aos-id-cta]">
                          <svg className="w-3 h-3 text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="5" fill="green" />
                          </svg>
                          <p className="font-bold text-green-500">Android Development</p>
                        </li>
                      </ul>
                      <a className="btn-sm text-white bg-red-600 rounded hover:bg-red-400 mt-6" href="https://github.com/kunalanand456/shoppy-ios" target='_blank'>
                        <span className="text-m font-bold text-left">CleverTap</span>
                      </a>
                    </div>

                  </article>
                </Transition>

                {/* Item 2 */}
                <Transition
                  show={tab === 6}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="flex justify-center items-center md:absolute md:inset-0 md:w-1/2">
                      <Image src={viddl } width={350} height={150} alt="Tabs 02" />
                    </figure>
                    <div className="relative bg-black-800 py-8 md:py-16 px-6 md:p l-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                      <h4 className="h4 mb-2">Data Analyst Intern</h4>
                      <p className="text-lg text-gray-400">Viddl is an early-stage startup that uses AI to automatically create short video trailers from existing long-form videos</p><br />
                      <p className="text-lg"> At <span className='font-bold'>Viddl</span>, I worked on training an AI model to accurately condense videos and summarize long-form videos into short videos. </p>
                      <p className="text-lg">I also oversaw the video production for the final edits of updated videos and lead the Video Editing team. </p>
                      <br></br>
                      <ul className="flex flex-wrap text-sm text-gray-400 -mx-2 -my-2">
                        <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="[data-aos-id-cta]">
                          <svg className="w-3 h-3 text-cyan-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="5" fill="cyan" />
                          </svg>
                          <p className="font-bold text-cyan-500">AI Development and Testing</p>
                        </li>
                      </ul>
                      <a className="btn-sm text-white bg-pink-500 rounded hover:bg-pink-400 mt-6" href="https://viddl.com/" target='_blank'>
                        <span className="text-m font-bold text-left">viddl</span>
                      </a>
                    </div>
                  </article>
                </Transition>

                {/* Item 3 */}
                <Transition
                  show={tab === 4}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  
                  
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className= "flex justify-center items-center  md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                      <Image  src={GoEzz} width={300} height={400} alt="Tabs 02" />
                    </figure>
                    <div className="relative bg-black-800 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                      <h4 className="h4 mb-2">Software Engineer</h4>
                      <p className="text-lg text-gray-400">GoEzz provides door-to-door ride transformation for children with accredited transportation providers</p><br />
                      <p className="text-lg"> At <span className='font-bold'>GoEzz</span>, I led the design and development of the primary website within a 5-member team, utilizing React and JavaScript for
development. </p>
<p>I also established a MySQL database system to ensure seamless data collection and management.</p>

                      <br></br>
                      <ul className="flex flex-wrap text-sm text-gray-400 -mx-2 -my-2">
                        <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="[data-aos-id-cta]">
                          <svg className="w-3 h-3 text-orange-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="5" fill="orange" />
                          </svg>
                          <p className="font-bold text-orange-500">Database Management</p>
                        </li>
                        <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="[data-aos-id-cta]">
                          <svg className="w-3 h-3 text-purple-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="5" fill="purple" />
                          </svg>
                          <p className="font-bold text-purple-500">Web Development</p>
                        </li>
                        <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="[data-aos-id-cta]">
                          <svg className="w-3 h-3 text-pink-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="5" fill="pink" />
                          </svg>
                          <p className="font-bold text-pink-500">Design</p>
                        </li>
                      </ul>
                      <a className="btn-sm text-white bg-green-600 rounded hover:bg-green-400 mt-6" href="https://www.goezz.net/" target='_blank'>
                        <span className="text-m font-bold text-left">GoEzz</span>
                      </a>
                    </div>
                  </article>
                </Transition>

                {/* Item 4 */}
                <Transition
                  show={tab === 2}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                      <Image className="w-full h-full object-contain" src={dealpad} width={516} height={387} alt="Tabs 02" />
                    </figure>
                    <div className="relative bg-black-800 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                    <h4 className="h4 mb-2">Data Engineer Intern</h4>
                      <p className="text-lg text-gray-400">dealpad.io is a Virtual Sales Room Platform that transforms sales leads into clients</p><br />
                      <p className="text-lg"> At <span className='font-bold'>dealpad</span>, I utilized advanced SQL queries to extract relevant data from the company database, aligning it with the defined customer success metrics.</p>
                      <p>I also visualized and automated daily data updates using Microsoft Power BI, ensuring real-time insights and accommodating
new information entered into the database.</p>
                      <br></br>
                      <ul className="flex flex-wrap text-sm text-gray-400 -mx-2 -my-2">
                        <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="[data-aos-id-cta]">
                          <svg className="w-3 h-3 text-orange-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="5" fill="orange" />
                          </svg>
                          <p className="font-bold text-orange-500">Database Management</p>
                        </li>
                        <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="[data-aos-id-cta]">
                          <svg className="w-3 h-3 text-red-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="5" fill="red" />
                          </svg>
                          <p className="font-bold text-red-500">Data Visualization</p>
                        </li>
                      </ul>
                      <a className="btn-sm text-white bg-blue-600 rounded hover:bg-blue-400 mt-6" href="https://www.dealpad.io/" target='_blank'>
                        <span className="text-m font-bold text-left">dealpad</span>
                      </a>
                    </div>
                  </article>
                </Transition>

                {/* Item 5 */}
                <Transition
                  show={tab === 3}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                  <figure className="flex justify-center items-center md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                      <Image src={M2} width={200} height={200} alt="Tabs 01" />
                    </figure>
                    <div className="relative bg-black-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                    <h4 className="h4 mb-2">Software Engineer Intern</h4>
                      
                      <p className="text-lg text-gray-400">M2 Information Systems provides secure patient-doctor messaging and clinical alerting technology to the healthcare industry</p><br />
                      <p className="text-lg"> At <span className='font-bold'>M2</span>, I helped with the transition of .ASPX web pages to modern, responsive web interfaces, enhancing user experience and accessibility. I personally designed and developed a personalized Patient Relative webpage, tailored to individual hospital requirements. </p>
                      <br />
                      <ul className="flex flex-wrap text-sm text-gray-400 -mx-2 -my-2">
                        <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="[data-aos-id-cta]">
                          <svg className="w-3 h-3 text-purple-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="5" fill="purple" />
                          </svg>
                          <p className="font-bold text-purple-500">Web Development</p>
                        </li>
                        <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="[data-aos-id-cta]">
                          <svg className="w-3 h-3 text-pink-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="6" cy="6" r="5" fill="pink" />
                          </svg>
                          <p className="font-bold text-pink-500">Design</p>
                        </li>
                      </ul>
                      <a className="btn-sm text-white bg-blue-400 rounded hover:bg-blue-200 mt-6" href="https://www.m2is.com/" target='_blank'>
                        <span className="text-m font-bold text-left">M2 Information Systems</span>
                      </a>
                    </div>
                  </article>
                </Transition>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
