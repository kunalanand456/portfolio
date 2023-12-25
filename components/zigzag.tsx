import Image from 'next/image'

import kunal from '@/public/images/kunalcover.jpg'

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">About Me</h1>
          </div>

          {/* Items */}
          <div className="grid gap-20">

           

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={kunal} width={450} height={400} alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 mb-3">Hey! 👋</h3> 
                  <p className="text-xl text-white-400 mb-4">I am currently a student at <span className = 'font-bold text-purple-100'> UW Seattle</span> studying <span className = 'font-bold text-white'>Human Centered Design Engineering</span> with a focus in <span className = 'font-bold text-white'>Data Science</span><span>.</span></p>
                  <p className="text-xl text-white-400 mb-4">In my free time I enjoy listening to music and watching movies with my friends.</p>
                </div>
              </div>
            </div>
           
          </div>

        </div>
      </div>
    </section>
  )
}
