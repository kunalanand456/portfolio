import VideoThumb from '@/public/images/hero-image-01.jpg'
import ModalVideo from '@/components/modal-video'

export default function HeroHome() {
  return (
    <section className="relative">

    {/* Background image */}
    {/* Hero content */}
    <br/>
    <br/>
    <div className="max-w-8xl mx-auto px-4 sm:px-6  flex justify-center items-center">
      <div className="pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="h1 mb-3 font-size: 100" data-aos="fade-up">Hi!</h1>
          <br/>  
          <p className="text-xl text-white-400 mb-8" data-aos="fade-up" data-aos-delay="200">My name is <span className= 'font-bold'>Kunal</span>, and I'm an aspiring engineer interested in the intersection of Software Engineering and Design.</p>
        </div>
        <br/>  
        <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
        
            <div data-aos="fade-up" data-aos-delay="400">
              <a className="btn-sm text-white bg-black-700 border-b border-black hover:border-b-white ml-3 w-full sm:w-auto sm:ml-4" href="/work">My Work</a>
            </div>
            <br></br>
            <div data-aos="fade-up" data-aos-delay="400">
              <a className="btn-sm text-white bg-black-700 border-b border-black hover:border-b-white ml-3 w-full sm:w-auto sm:ml-4" href="/about">About</a>
            </div>
          </div>
      </div>
    </div>

  </section>
  )
}
