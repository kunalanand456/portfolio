export default function Process() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-10 pb-12 md:pt-16 md:pb-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4" data-aos="fade-up">My Strengths/ Interests</h2>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">As I progress in my career, I hope to further strengthen my skills in these fields</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up">
              <div aria-hidden="true" className="absolute h-1 hidden md:block" style={{ width: 'calc(100% - 32px)', left: 'calc(50% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="200"></div>
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-black" width="64" height="64" rx="32" />
                <rect className="fill-current text-white" x="8" y="16" width="48" height="32" rx="2" />
                <rect className="fill-current text-white" x="28" y="50" width="8" height="2" />
                <rect className="fill-current text-white" x="22" y="52" width="20" height="2" />
              </svg>
              <h4 className="h4 mb-2">Web Development</h4>
              <p className="text-lg text-gray-400 ">Familiar with:</p>
              <br />
              <ul className="flex flex-wrap justify-center text-lg text-gray-400 -mx-2 -my-1">
                <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-cta]">
                  <svg className="w-3 h-3 fill-current text-white mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="3" />
                  </svg>
                  <p className="text-sm text-white italic">ReactJS</p>
                </li>
                <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="[data-aos-id-cta]">
                  <svg className="w-3 h-3 fill-current text-white mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="3" />
                  </svg>
                  <p className="text-sm text-white italic">Javascript</p>
                </li>
                <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="1000" data-aos-anchor="[data-aos-id-cta]">
                  <svg className="w-3 h-3 fill-current text-white mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="3" />
                  </svg>
                  <p className="text-sm text-white italic">NextJS</p>
                </li>
                <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="1000" data-aos-anchor="[data-aos-id-cta]">
                  <svg className="w-3 h-3 fill-current text-white mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="3" />
                  </svg>
                  <p className="text-sm text-white italic">CSS</p>
                </li>
                <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="1000" data-aos-anchor="[data-aos-id-cta]">
                  <svg className="w-3 h-3 fill-current text-white mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="3" />
                  </svg>
                  <p className="text-sm text-white italic">Flask</p>
                </li>
              </ul>
            </div>

            
            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up">
              <div aria-hidden="true" className="absolute h-1 hidden md:block" style={{ width: 'calc(100% - 32px)', left: 'calc(50% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="200"></div>
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-white" x="16" y="8" width="32" height="48" rx="4" />
                <rect className="fill-current text-black" x="20" y="14" width="24" height="36" rx="2" />
             
              </svg>
              <h4 className="h4 mb-2">App Development</h4>
              <p className="text-lg text-gray-400 ">Familiar with:</p>
              <br />
              <ul className="flex flex-wrap justify-center text-lg text-gray-400 -mx-2 -my-1">
                <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-cta]">
                  <svg className="w-3 h-3 fill-current text-white mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="3" />
                  </svg>
                  <p className="text-sm text-white italic">Swift</p>
                </li>
                <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="[data-aos-id-cta]">
                  <svg className="w-3 h-3 fill-current text-white mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="3" />
                  </svg>
                  <p className="text-sm text-white italic">Android</p>
                </li>
                

              </ul>
            </div>
            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up">
              <div aria-hidden="true" className="absolute h-1 hidden md:block" style={{ width: 'calc(100% - 32px)', left: 'calc(50% + 48px)', top: '32px' }} data-aos="fade-in" data-aos-delay="200"></div>
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-black" width="64" height="64" rx="32" />
                <rect className="fill-current text-white" x="20" y="8" width="24" height="48" rx="2" />
                <rect className="fill-current text-white" x="26" y="56" width="12" height="4" />
                <rect className="fill-current text-white" x="26" y="20" width="12" height="4" rx="1" />
              </svg>
              <h4 className="h4 mb-2">Data Programming</h4>
              <p className="text-lg text-gray-400 ">Familiar with:</p>
              <br />
              <ul className="flex flex-wrap justify-center text-lg text-gray-400 -mx-2 -my-1">
                <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-cta]">
                  <svg className="w-3 h-3 fill-current text-white mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="3" />
                  </svg>
                  <p className="text-sm text-white italic">MySQL</p>
                </li>
                <li className="flex items-center mx-3 my-1" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="[data-aos-id-cta]">
                  <svg className="w-3 h-3 fill-current text-white mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6" cy="6" r="3" />
                  </svg>
                  <p className="text-sm text-white italic">Python</p>
                </li>
               

              </ul>
            </div>


          </div>

        </div>
      </div>
    </section>
  )
}
