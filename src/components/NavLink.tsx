'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import { ModeToggle } from '@/components/ModeToggle'

const links = [
  {
    label: 'Home',
    path: '#home',
  },
  {
    label: 'About',
    path: '#about',
  },
  {
    label: 'Portfolio',
    path: '#portfolio',
  },
  {
    label: 'Contact',
    path: '#contact',
  },
]

const NavLink = () => {
  const [open, setOpen] = useState<boolean>(false)
  const navRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClickOutside = (e: MouseEvent) => {
    if (e.target !== navRef.current && e.target !== buttonRef.current) {
      setOpen(false)
    }
  }

  const handleToggle = () => {
    setOpen((prev) => !prev)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className='flex items-center px-4'>
      <button
        ref={buttonRef}
        onClick={handleToggle}
        className='inline-flex items-center justify-center text-sm rounded-md md:hidden'
      >
        {!open ? <IoMenu className='size-8' /> : <IoClose className='size-8' />}
      </button>
      <nav
        ref={navRef}
        className={clsx(
          'absolute md:static top-full right-0 origin-top w-full max-w-[200px] md:max-w-full bg-white/95 dark:bg-slate-950/95 md:block rounded-md shadow-md dark:shadow-gray-500 md:shadow-none transition-all duration-300 ease-in-out transform md:scale-y-100 md:opacity-100 md:visible',
          {
            'scale-y-100 opacity-100 visible': open,
            'scale-y-0 opacity-0 invisible': !open,
          },
        )}
      >
        <ul className='flex flex-col p-4 text-sm font-semibold uppercase rounded-sm md:flex-row md:items-center md:space-x-4 md:p-0 md:mt-0 md:border-0'>
          {links.map((link, i) => (
            <li key={i} className='flex'>
              <Link
                href={link.path}
                className='text-primary transition-all duration-300 ease-in-out p-2 w-full rounded-sm hover:bg-blue-500 hover:text-white'
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className='p-2'>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavLink
