import Navbar from '@components/Navbar';
import '@styles/globals.css'
import { Inter } from 'next/font/google'

const interFont = Inter({subsets: ['latin']});

export const metadata = {
  title : "Front End Synapsis.id Challenge",
  description: "Front End Synapsis.id Challenge"
}

const RootLayout = ( {children} ) => {
  return (
    <html lang="en">
      <body className={interFont.className}>
        <Navbar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout