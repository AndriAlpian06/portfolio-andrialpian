import React from 'react'
import portfolio1 from '../images/portfolio-1.png'
import portfolio2 from '../images/portfolio-2.png'
import exprotates from '../images/exprotates.png'
import gayeng from '../images/gayeng.png'
import furnitueSecond from '../images/furniture-second.png'

export default function Portfolio() {
  return (
    <section id="portfolio" className='pt-36 pb-16 bg-white dark:bg-dark'>
        <div className='container'>
            <div className='w-full px-4'>
                <div className='max-w-xl mx-auto text-center mb-16'>
                    <h4 className='font-bold uppercase text-primary text-4xl mb-3'>Portfolio</h4>
                    <h2 className='font-bold text-black dark:text-white text-3xl mb-4'>Project yang sedang di kerjakan</h2>
                    <p className='font-medium text-base text-black dark:text-white'>berikut project project saya yang saya buat dan develop dari tempat saya berkerja</p>
                </div>
            </div>
            <div className='w-full px-4 flex flex-wrap justify-center'>
                <div className='mb-12 p-4 md:w-1/2'>
                    <div className='rounded-md shadow-md overflow-hidden'>
                        <img src={exprotates} alt="" width="w-full"/>
                    </div>
                    <h3 className='font-semibold text-xl text-black dark:text-white mt-5 mb-3'>Website EXPROTATES</h3>
                    <p className='font-medium text-base text-black dark:text-white'>website EXPROTATES adalah sebuah web company profile yang memberikan informasi seputar tentang exporting berbasis indonesia, dan menawarkan produk produk export untuk mengetahui selengkapnya berikut link web nya <a href="https://ex-exportates.netlify.app/" target='_blank' rel="noreferrer" className='text-blue-500'>https://ex-exportates.netlify.app</a></p>
                </div>
                <div className='mb-12 p-4 md:w-1/2'>
                    <div className='rounded-md shadow-md overflow-hidden'>
                        <img src={gayeng} alt="" width="w-full"/>
                    </div>
                    <h3 className='font-semibold text-xl text-black dark:text-white mt-5 mb-3'>Website PT GAYENG MAS ABASI</h3>
                    <p className='font-medium text-base text-black dark:text-white'>website PT GAYENG MAS ABADI adalah sebuah web company profile yang memberikan informasi seputar tentang videotron dan menawarkan videotron videotron di berbagai daerah untuk mengetahui selengkapnya berikut link web nya <a href="https://ex-gayengmasabadi.netlify.app/" target='_blank' rel="noreferrer" className='text-blue-500'>https://ex-gayengmasabadi.netlify.app/</a></p>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='w-full px-4'>
                <div className='max-w-xl mx-auto text-center mb-16'>
                    <h2 className='font-bold text-black dark:text-white text-3xl mb-4'>Project yang pernah di buat</h2>
                    <p className='font-medium text-base text-black dark:text-white'>berikut project project saya yang saya buat dan develop dari tempat saya berkerja</p>
                </div>
            </div>
            <div className='w-full px-4 flex flex-wrap justify-center'>
                <div className='mb-12 p-4 md:w-1/2'>
                    <div className='rounded-md shadow-md overflow-hidden'>
                        <img src={furnitueSecond} alt="" width="w-full"/>
                    </div>
                    <h3 className='font-semibold text-xl text-black dark:text-white mt-5 mb-3'>Website FURNITURE SECOND</h3>
                    <p className='font-medium text-base text-black dark:text-white'>website FURNITURE SECOND adalah sebuah web penjualan barang barang mebel seperti kursi, meja, lemari dan brankas. dan juga menyediakan service kursi, meja dll untuk mengetahui selengkapnya berikut link web nya <a href="https://furniture-second.netlify.app/" target='_blank' rel="noreferrer" className='text-blue-500'>https://furniture-second.netlify.app/</a></p>
                </div>
                <div className='mb-12 p-4 md:w-1/2'>
                    <div className='rounded-md shadow-md overflow-hidden'>
                        <img src={portfolio1} alt="" width="w-full"/>
                    </div>
                    <h3 className='font-semibold text-xl text-black dark:text-white mt-5 mb-3'>Chatbot FB IndiHome Care</h3>
                    <p className='font-medium text-base text-black dark:text-white'>chatbot ini saya buat untuk memberikan seputar informasi mengenai indihome ke pada customer, chatbot ini ada di channel fb messenger</p>
                </div>
                <div className='mb-12 p-4 md:w-1/2'>
                    <div className='rounded-md shadow-md overflow-hidden'>
                        <img src={portfolio2} alt="" width="w-full"/>
                    </div>
                    <h3 className='font-semibold text-xl text-black dark:text-white mt-5 mb-3'>Chatbot IndiHome.co.id</h3>
                    <p className='font-medium text-base text-black dark:text-white'>chatbot ini saya buat untuk memberikan seputar informasi, permintaan dan panduan kendala mengenai indihome ke pada customer, chatbot ini ada di channel web indihome.co.id di halaman bantuan lalu pilih livechat</p>
                </div>
            </div>
        </div>
    </section>
  )
}
