import React from 'react'
import profile from '../images/profile.png'

export default function Hero() {
  return (
    <section id='home' className='pt-36'>
      <div className='container'>
        <div className='flex flex-wrap'>
          <div className='w-full self-center px-4 lg:w-1/2'>
            <h1 className='text-base font-bold text-primary md:text-xl'>Hallo Semua, Perkenalkan Saya <span className='block font-bold text-4xl text-dark'>Andri Alpian</span></h1>
              <h2 className='font-medium text-dark text-lg mb-5 lg:text-2xl'>Engineer Chatbot & <span className='text-slate-500'>Web Developer</span></h2>
              <p className='font-medium text-secondary mb-10 leading-relaxed'>saya bekerja di perusahaan swasta dengan posisi sebagai <span className='text-dark'>Engineer Chatbot</span></p>

              <a href="#" className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:bg-sky-400 transition duration-300 ease-in-out'>Hubungi Saya</a>
          </div>
          <div className='w-full self-end px-4 lg:w-1/2'>
            <div className='relative mt-10 lg:mt-9 lg:right-0'>
              <img src={profile} alt="Andri Alpian" className='max-w-full mx-auto' />
              <span className='absolute -bottom-0 -z-10 left-1/2 -translate-x-1/2 md:scale-125'>
                <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#38BDF8" d="M48,-15.2C56.2,9.4,52.4,38.2,33,54.5C13.5,70.9,-21.8,74.7,-43.5,59.1C-65.3,43.5,-73.5,8.5,-64,-18C-54.5,-44.6,-27.2,-62.6,-3.6,-61.4C20,-60.2,39.9,-39.8,48,-15.2Z" transform="translate(100 100) scale(1.1)" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
