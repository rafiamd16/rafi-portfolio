import Link from 'next/link'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen gap-4'>
      <h1 className='text-3xl font-bold'>404 | Page Not Found...</h1>
      <Link
        href='/'
        className='px-6 py-2 transition-all duration-300 ease-in-out bg-gray-100 rounded hover:bg-gray-300'
      >
        Kembali
      </Link>
    </div>
  )
}

export default NotFound
