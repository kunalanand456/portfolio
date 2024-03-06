export default function Timeline() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">  

          {/* Items */}
          <div className="max-w-3xl mx-auto -my-4 md:-my-6" data-aos-id-timeline>

            {/* 1st item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up"  data-aos-delay="400" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-white-600 bg-black-200 rounded-full border border-white">2019</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-white border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">CleverTap</h4>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up"  data-aos-delay="500" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-white-600 bg-black-200 rounded-full border border-white">2021</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-white border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">GoEzz</h4>
                </div>
              </div>
            </div> 

            {/* 3rd item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-white bg-black rounded-full border border-white">2022</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-white border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">Viddl</h4>
                </div>
              </div>
            </div>

            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up"  data-aos-delay="700" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-white-600 bg-black-200 rounded-full border border-white">2022</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-white border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">CleverTap</h4>
                </div>
              </div>
            </div>

            {/* 4th item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="800" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-white bg-black rounded-full border border-white ">2023</div>
                  <div className="absolute left-0 w-2 h-2 bg-white border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4">1 million happy customers</h4>
                </div>
              </div>
            </div>

            
          </div>

        </div>
      </div>
    </section>
  )
}
