import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'

const Navbar = () => {
  return (
    <header className='fixed top-0 left-0 z-50 flex items-center w-full shadow-sm dark:shadow-gray-900 bg-white/95 dark:bg-slate-950/95'>
      <div className='container px-4 mx-auto'>
        <div className='relative flex items-center justify-between'>
          <div className='px-4'>
            <Link href='/' className='block py-6 text-lg font-bold text-blue-500'>
              RAFIAHMAD
            </Link>
          </div>
          <NavLink />
        </div>
      </div>
    </header>
  )
}

export default Navbar
