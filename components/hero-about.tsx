import Image from 'next/image'

import HeroImage from '@/public/images/kunalcover.jpg'

export default function HeroAbout() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
      <img
          src="/images/kunalcover.jpg" // Adjust the path as needed
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          alt="About"
        />
        <div className="absolute inset-0 "></div> {/* Adjusted for better readability */}
      </div>
      {/* Hero content */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 mb-3 font-size:90" data-aos="fade-up">Hi!</h1>
            <br/>  
            <p className="text-xl text-white-400 mb-8" data-aos="fade-up" data-aos-delay="200">My name is <span className= 'font-bold'>Kunal</span>, and I'm an aspiring engineer interested in the intersection of Software Engineering and Data Science.</p>
          </div>
          <br/>  
          <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
          
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn-sm text-white bg-black-700 border-b border-black hover:border-b-white ml-3 w-full sm:w-auto sm:ml-4" href="/features">My Work</a>
              </div>
              <br></br>
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn-sm text-white bg-black-700 border-b border-black hover:border-b-white ml-3 w-full sm:w-auto sm:ml-4" href="/features">About</a>
              </div>
            </div>
        </div>
      </div>

    </section>
  )
}
