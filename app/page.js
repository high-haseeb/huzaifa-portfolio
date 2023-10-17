import Navbar from '@/components/navbar'
import Image from 'next/image'

export default function Home() {
  return (
  <div className='flex justify-center items-center'>
      <Navbar/>
      <div className='text-stone-400 text-4xl font-sans font-bold'>
        Hello world!
      </div>
    </div>
  )
}
