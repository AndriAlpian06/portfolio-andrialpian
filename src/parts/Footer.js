import React from 'react'
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <footer className='bg-dark pt-24 pb-12'>
        <div className='container'>
            <div className='flex flex-wrap'>
                <div className='w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3'>
                    <h2 className='font-bold text-4xl text-white mb-5'>andrialpian</h2>
                    <h3 className='font-bold text-2xl mb-2'>Hubungi Saya</h3>
                    <p className='mb-3'>ismeandrialpian@gmail.com</p>
                    <p className='mb-3'>Kp Bojong Rt 01/01</p>
                    <p className='mb-3'>Bogor</p>
                </div>
                <div className='w-full px-4 mb-12 md:w-1/3'>
                    <h3 className='font-semibold text-xl text-white mb-5'>Kategori Tulisan</h3>
                    <ul className='text-slate-300'>
                        <li>
                            <a href='#' className='inline-block text-base hover:text-primary mb-3'>Programming</a>
                        </li>
                        <li>
                            <a href='#' className='inline-block text-base hover:text-primary mb-3'>TeKnologi</a>
                        </li>
                        <li>
                            <a href='#' className='inline-block text-base hover:text-primary mb-3'>Gaya Hidup</a>
                        </li>
                    </ul>
                </div>
                <div className='w-full px-4 mb-12 md:w-1/3'>
                    <h3 className='font-semibold text-xl text-white mb-5'>Tautan</h3>
                    <ul className='text-slate-300'>
                        <li>
                            <Link to='Navbar' spy={true} smooth={true} duration={500} className='inline-block text-base hover:text-primary mb-3'>Beranda</Link>
                        </li>
                        <li>
                            <Link to='about' spy={true} smooth={true} duration={500} className='inline-block text-base hover:text-primary mb-3'>Tentang Saya</Link>
                        </li>
                        <li>
                            <Link to='about' spy={true} smooth={true} duration={500} className='inline-block text-base hover:text-primary mb-3'>Keahlian</Link>
                        </li>
                        <li>
                            <Link to='portfolio' spy={true} smooth={true} duration={500} className='inline-block text-base hover:text-primary mb-3'>Portfolio</Link>
                        </li>
                        <li>
                            <Link to='contact' spy={true} smooth={true} duration={500} className='inline-block text-base hover:text-primary mb-3'>Kontak</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='w-full pt-10 border-t border-slate-700'>
                <div className='flex items-center justify-center mb-5'>
                    {/* Instagram */}
                    <a href='#' target="_blank" className='w-9 h-9 mr-3 rounded-full flex justify-center items-center broder border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white'><svg role="img" width="20" className='fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg></a>
                    {/* Facebook */}
                    <a href='#' target="_blank" className='w-9 h-9 mr-3 rounded-full flex justify-center items-center broder border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white'><svg role="img" width="20" className='fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                    {/* Twitter */}
                    <a href='#' target="_blank" className='w-9 h-9 mr-3 rounded-full flex justify-center items-center broder border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white'><svg role="img" width="20" className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
                    {/* Linkedln */}
                    <a href='#' target="_blank" className='w-9 h-9 mr-3 rounded-full flex justify-center items-center broder border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white'><svg role="img" width="20" className='fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
                    {/* Github */}
                    <a href='#' target="_blank" className='w-9 h-9 mr-3 rounded-full flex justify-center items-center broder border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white'><svg role="img" width="20" className='fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
                </div>
                <p className='font-medium text-sm text-slate-500 text-center'>&#169; <span className='text-primary'>Andri Alpian</span></p>
            </div>
        </div>
    </footer>
  )
}
