export const metadata = {
  title: 'kunal - work',
  description: 'Page description',
}

import CaseStudies from '@/components/case-studies'
import Process from '@/components/process'
import Tabs from '@/components/tabs'
import PricingTables from '@/components/pricing-tables'
import Faqs from '@/components/faqs'
import Testimonials from '@/components/testimonials'
import Cta from '@/components/cta'

export default function Work() {
  return (
    <>
      <Tabs/> 
      <Process/>
      <CaseStudies/>
    </>
  )
}
