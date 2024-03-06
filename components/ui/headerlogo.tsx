import Link from 'next/link'
import Dropdown from '@/components/utils/dropdown'
import MobileMenu from './mobile-menu'

export default function HeaderLogo() {
  return (
      <header className="absolute w-full z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Site branding */}
            <div className="shrink-0 mr-4">
              {/* Logo */}
              <Link href="/" className="block" aria-label="Cruip">
  <svg 
    className="w-8 h-8 fill-current text-white-600 border-2 border-transparent hover:border-white rounded-full" 
    viewBox="0 0 32 32" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
  >
    <path d="M12,8 v16" stroke="white" strokeWidth="2"/>
    <path d="M12,14 l5,-6" stroke="white" strokeWidth="2"/>
    <path d="M12,14 l10,10" stroke="white" strokeWidth="2"/>
    <path d="M12,20 l5,-5" stroke="white" strokeWidth="2"/>
  </svg>
</Link>


            
            </div>

          </div>
        </div>
      </header>
  )
}
