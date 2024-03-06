import Image from 'next/image'

import NewsImage10 from '@/public/images/news-10.jpg'
import NewsImage11 from '@/public/images/news-11.jpg'
import NewsImage12 from '@/public/images/news-12.jpg'

export default function CaseStudies() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">My Projects</h2>
            
          </div>

          {/* Articles */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 md:gap-6 lg:gap-6 items-start md:max-w-none">

            {/* 1st article */}
            <article className="flex flex-col h-full" data-aos="fade-up">
                <a className="block" href="#0">
  <figure className="relative h-0 pb-9/16 overflow-hidden">
    <div className="absolute inset-0 w-full h-full flex justify-around">
      <div className="w-1/3 h-full" style={{ backgroundColor: '#b79dc6' }}></div> {/* Color #b79dc6 */}
      <div className="w-1/3 h-full" style={{ backgroundColor: '#a886c8' }}></div> {/* Color #a886c8 */}
      <div className="w-1/3 h-full" style={{ backgroundColor: '#7c4c94' }}></div> {/* Color #9c7cb9 */}
    </div>
  </figure>
</a>
              <div className="grow flex flex-col h-full p-6 bg-black-800">
                <h3 className="h4 mb-2">
                  <p className="hover:text-gray-100 transition duration-150 ease-in-out" >Where2Eat</p>
                </h3>
                <p className="text-lg text-gray-400 grow">Where2Eat is a desktop web application that provides the user with a random restaurant within the US, with the provided parameters. Powered with <span className = "font-bold">Yelp Fusion API</span>.</p> <br/>
                <p className = "text-m">Technology used: <span className = "font-bold">Python, Flask, CSS, HTML</span></p>
                <div>
                  <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="https://where2eat.pythonanywhere.com/" target='_blank'>
                    <span className="text-sm font-bold">Check it out!</span>
                  </a>
                </div>
              </div>
            </article>

            {/* 2nd article */}
            <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
              <a className="block" href="#0">
              <figure className="relative h-0 pb-9/16 overflow-hidden">
    <div className="absolute inset-0 w-full h-full flex justify-around">
      <div className="w-1/3 h-full" style={{ backgroundColor: '#ebebf4' }}></div> {/* Color #b79dc6 */}
      <div className="w-1/3 h-full" style={{ backgroundColor: '#a4148c' }}></div> {/* Color #a886c8 */}
      <div className="w-1/3 h-full" style={{ backgroundColor: '#241154' }}></div> {/* Color #9c7cb9 */}
    </div>
  </figure>
              </a>
              <div className="grow flex flex-col h-full p-6 bg-black-800">
                <h3 className="h4 mb-2">
                  <p className="hover:text-gray-100 transition duration-150 ease-in-out">Senior Saver</p>
                </h3>
                <p className="text-lg text-gray-400 grow">Senior Saver is an interactive prototype that functions as a smartwatch living-assistant for the senior population of the United States. Conducted research, interview and usability testing for prototype.</p><br/>
                <p className = "text-m">Technology used: <span className = "font-bold">Figma</span></p>
                <div>
                  <a className="btn-sm text-white bg-purple-800 hover:bg-purple-900 mt-6" href="https://stevenzhucongyi0.wixsite.com/senior-savor-portfol" target='_blank'>
                    <span className="text-sm font-bold">Check it out!</span>
                  </a>
                </div>
              </div>
            </article>

          

          </div>

        </div>
      </div>
    </section>
  )
}
