import React from 'react'

export default function Blog() {
  return (
    <section id="blog" className='pt-36 pb-32 bg-slate-100'>
        <div className='container'>
            <div className='w-full px-4'>
                <div className='max-w-xl mx-auto text-center mb-16'>
                    <h4 className='font-bold uppercase text-primary text-lg mb-3'>Blog</h4>
                    <h2 className='font-bold text-dark text-3xl mb-4'>Tulisan Terkini</h2>
                    <p className='font-medium text-base text-secondary'>lorem ipsum dolor sit amet consectetur adipising elit. Id temporibus maiores sequi vitae sarpe iusto delenit!</p>
                </div>
            </div>
            <div className='flex flex-wrap'>
                <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
                    <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
                        <img src="https://source.unsplash.com/360x320?Programming" alt="" className='w-full' />
                        <div className='py-8 px-6'>
                            <h3>
                                <a href='#' className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>Tips belajar Programming</a>
                            </h3>
                            <p className='font-medium text-base text-secondary mb-6'>lorem ipsum dolor sit amet consectetur adipising elit. Id temporibus maiores sequi vitae sarpe iusto delenit!</p>
                            <a href='#' className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80'>Baca Selangkapnya</a>
                        </div>
                    </div>
                </div>
                <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
                    <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
                        <img src="https://source.unsplash.com/360x320?Programming" alt="" className='w-full' />
                        <div className='py-8 px-6'>
                            <h3>
                                <a href='#' className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>Tips belajar Programming</a>
                            </h3>
                            <p className='font-medium text-base text-secondary mb-6'>lorem ipsum dolor sit amet consectetur adipising elit. Id temporibus maiores sequi vitae sarpe iusto delenit!</p>
                            <a href='#' className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80'>Baca Selangkapnya</a>
                        </div>
                    </div>
                </div>
                <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
                    <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
                        <img src="https://source.unsplash.com/360x320?Programming" alt="" className='w-full' />
                        <div className='py-8 px-6'>
                            <h3>
                                <a href='#' className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>Tips belajar Programming</a>
                            </h3>
                            <p className='font-medium text-base text-secondary mb-6'>lorem ipsum dolor sit amet consectetur adipising elit. Id temporibus maiores sequi vitae sarpe iusto delenit!</p>
                            <a href='#' className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80'>Baca Selangkapnya</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
