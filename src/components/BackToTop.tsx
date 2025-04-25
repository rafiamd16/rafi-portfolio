'use client'

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <button
        onClick={scrollToTop}
        className='fixed bottom-4 right-4 z-[9999] h-14 w-14 flex items-center justify-center rounded-full bg-blue-500 p-4 hover:animate-bounce shadow'
        id='to-top'
      >
        <span className='block w-5 h-5 mt-2 rotate-45 border-t-4 border-l-4 rounded'></span>
      </button>
    </>
  )
}

export default BackToTop
