import './css/style.css'


import Header from '@/components/ui/header'



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`font-futura antialiased bg-black text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
 
