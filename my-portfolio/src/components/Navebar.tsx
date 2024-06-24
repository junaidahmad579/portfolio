import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import { Button } from './ui/button'

const Navebar = () => {
  return (
    <div className='w-full h-10 overflow-hidden items-center justify-between flex p-12 border-b-2'>
        <div>
            <Link
            href={'/'}>
           <h1 className='text-[26px] font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Junaid Ahmad</h1> 
           </Link>
        </div>
        <div className='flex space-x-2'>
            <Menu/>
            <Button
            className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold'>Hire Me</Button>

        </div>

    </div>
  )
}

export default Navebar