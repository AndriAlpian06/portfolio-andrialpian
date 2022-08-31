import React from 'react'
import portfolio1 from '../images/portfolio-1.png'
import portfolio2 from '../images/portfolio-2.png'

export default function Portfolio() {
  return (
    <section id="portfolio" className='pt-36 pb-16 bg-slate-100'>
        <div className='container'>
            <div className='w-full px-4'>
                <div className='max-w-xl mx-auto text-center mb-16'>
                    <h4 className='font-bold uppercase text-primary text-lg mb-3'>Portfolio</h4>
                    <h2 className='font-bold text-dark text-3xl mb-4'>Project Terbaru</h2>
                    <p className='font-medium text-base text-secondary'>lorem ipsum dolor sit amet consectetur adipising elit. Id temporibus maiores sequi vitae sarpe iusto delenit!</p>
                </div>
            </div>
            <div className='w-full px-4 flex flex-wrap justify-center'>
                <div className='mb-12 p-4 md:w-1/2'>
                    <div className='rounded-md shadow-md overflow-hidden'>
                        <img src={portfolio1} alt="" width="w-full"/>
                    </div>
                    <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Chatbot FB IndiHome Care</h3>
                    <p className='font-medium text-base text-secondary'>lorem ipsum dolor sit amet consectetur adipising elit. Id temporibus maiores sequi vitae sarpe iusto delenit!</p>
                </div>
                <div className='mb-12 p-4 md:w-1/2'>
                    <div className='rounded-md shadow-md overflow-hidden'>
                        <img src={portfolio2} alt="" width="w-full"/>
                    </div>
                    <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Chatbot IndiHome.co.id</h3>
                    <p className='font-medium text-base text-secondary'>lorem ipsum dolor sit amet consectetur adipising elit. Id temporibus maiores sequi vitae sarpe iusto delenit!</p>
                </div>
            </div>
        </div>
    </section>
  )
}
