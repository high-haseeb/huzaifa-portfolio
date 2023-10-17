import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import HomePage from '@/components/veiwcount'
import Image from 'next/image'

export default function Home() {
  return (
  <div className='flex flex-col  items-center'>
      <Navbar/>
      <HomePage/>
      <div className='text-stone-400 text-4xl font-sans font-bold'>
        Hello world!
      </div>
      <Footer/>
    </div>
  )
}
