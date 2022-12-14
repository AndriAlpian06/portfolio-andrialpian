import React from 'react'

// const hamburger = document.querySelector('#hamburger');

// hamburger.addEventListener('click', function () {
//     hamburger.classList.toggle('hamburger-active');
// });

export default function Header() {
  return (
    <header className='bg-transparent absolute top-0 left-0 w-full flex items-center z-10'>
        <div className='container'>
            <div className='flex items-center justify-between relative'>
                <div className='px-4'>
                    <a href='#' className='font-bold text-lg text-primary block py-6'>andrialpian</a>
                </div>
                <div className='flex items-center px-4'>
                    <button id="hamburger" name='hamburger' type='button' className='block absolute right-4'>
                        <span className='hamburger-line transition duration-300 ease-in-out'></span>
                        <span className='hamburger-line transition duration-300 ease-in-out'></span>
                        <span className='hamburger-line transition duration-300 ease-in-out'></span>
                    </button>
                </div>
            </div>
        </div>
    </header>
  )
}