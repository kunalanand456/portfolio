import Link from 'next/link'
export default function Blocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Connect with Me</h2>
            <p className = "text-small italic">check out my socials :)</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100"data-aos-anchor="[data-aos-id-blocks]">
            <Link href="https://www.linkedin.com/in/kunal-a/" target = '_blank' className="flex justify-center items-center text-white-600 bg-black hover:text-gray-100 hover:bg-blue-800 border-4 border-white   rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
        <svg className="w-20 h-20 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
        </svg>
      </Link>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
            <Link href="https://twitter.com/kunallanand" target = '_blank' className="flex justify-center items-center text-white-600 bg-black-800 border-4 border-white hover:text-black-100 hover:bg-blue-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
        <svg className="w-20 h-20 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
        </svg>
      </Link>
            </div>

            {/* 4th item */}
            

          
            
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
            <Link href="https://open.spotify.com/user/kunalanand456?si=EE8d0qM3RNSlNAZ9tS5xSA&nd=1&dlsi=b4f7f8b1e7b2406b" target = '_blank' className="flex justify-center items-center text-black-600 bg-green hover:text-gray-100 border-4 border-white hover:bg-green-400  rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
            <svg className="w-20 h-20 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm3.21 10.096c-.125.207-.394.271-.6.146-1.643-1.005-3.712-1.232-6.149-.675-.235.053-.469-.094-.522-.328-.054-.235.092-.469.328-.523 2.666-.609 4.954-.347 6.799.78.205.126.27.395.144.6zm.857-1.906c-.158.257-.494.338-.751.18-1.881-1.156-4.75-1.491-6.975-.816-.289.088-.594-.075-.681-.363-.087-.289.076-.593.364-.681 2.542-.771 5.703-.398 7.863.93.257.158.338.494.18.75zm.074-1.984c-2.257-1.34-5.979-1.464-8.133-.81-.345.105-.711-.09-.816-.436-.105-.346.09-.712.436-.817 2.473-.75 6.583-.605 9.181.937.311.184.413.586.229.897-.185.311-.587.413-.897.229z"/>
</svg>

      </Link>
      
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
