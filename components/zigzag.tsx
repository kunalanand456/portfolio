import Image from 'next/image'
import '@/app/css/additional-styles/theme.css'
import kunal from '@/public/images/kunalcover.jpg'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-5xl mx-auto text-center pb-12 md:pb-20">
          
           
          </div>

          {/* Items */}
          <div className="grid gap-20">

           

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={kunal} width={550} height={550} alt="Features 02"  loading="eager"/>
              </div>
              {/* Content */}
              <div className="max-w-2xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h2 className="h2 mb-2">Hi! 👋</h2> 
                  <p className="text-xl text-white-400 mb-4">I am currently a student at <span className = 'font-bold text-purple-100'> UW Seattle</span> studying <span className = 'font-bold text-white'>Human Centered Design Engineering</span> with a focus in <span className = 'font-bold text-white'>Data Science</span><span>.</span></p>
                  <p className="text-xl text-white-400 mb-4">I am passionate about building products and innovation within the technical world.</p>
                  <p className="text-xl text-white-400 mb-4">In my free time, I enjoy listening to music, hanging out with friends and trying out new restaurants.</p>
                  <br/>
                  <a href = "/">
                    <div className = 'arrow-container'><div className="arrow"><span></span> <span></span> <span></span></div><p></p></div>
                    
                  </a>
                  
                  
                </div>
              </div>
            </div>
           
          </div>

        </div>
    </div>
    </section>
  )
}
