import React, { useState, useEffect } from 'react'

import {Link as LinkScroll} from 'react-scroll'

const Navbar = () => {

    const [activeLink, setActiveLink] = useState(null);
    const [srcollActive, setScrollActive] = useState(false); 

    // State untuk menyimpan status dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollActive(window.scrollY > 20);
        });
    }, [])

    // Efek samping untuk memeriksa status dark mode saat komponen dimuat
    useEffect(() => {
        // Periksa apakah ada preferensi tema yang disimpan di local storage
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
        setIsDarkMode(true);
        }
    }, []);

    // Fungsi untuk menangani perubahan toggle
    const handleDarkModeToggle = () => {
        // Periksa status dark mode saat ini
        if (isDarkMode) {
            // Jika dark mode aktif, matikan
            setIsDarkMode(false);
            localStorage.setItem('theme', 'light');
            //console.log("Toggled light mode");
        } else {
            // Jika tidak aktif, aktifkan
            setIsDarkMode(true);
            localStorage.setItem('theme', 'dark');
            //console.log("Toggled dark mode");
        }
        
    };

    // Efek samping untuk mengubah kelas HTML berdasarkan status dark mode
    useEffect(() => {
        if (isDarkMode) {
        document.documentElement.classList.add('dark');
        } else {
        document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

  return (
    <header className={"fixed top-0 w-full z-30 bg-white dark:bg-dark transition duration-500 ease-in-out " + (srcollActive ? "shadow-md" : "")}>
            <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
                <div className="col-start-1 col-end-2 flex items-center">
                    <ul>
                        <LinkScroll 
                            to="home"
                            smooth={true}
                            duration={1000}
                        >
                            <h1 className="text-sky-500 text-4xl font-bold cursor-pointer">DRIAL</h1>
                        </LinkScroll>
                    </ul>
                </div>
                <ul className="hidden text-lg lg:flex col-start-6 col-end-8 text-black font-semibold items-center uppercase">
                    <LinkScroll
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onSetActive={() => {
                        setActiveLink("about");
                        }}
                        className={
                        "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative hover:border-b-2 hover:border-sky-500 w-auto" +
                        (activeLink === "about"
                            ? " text-sky-500 animation-active "
                            : " text-black dark:text-white hover:text-sky-500")
                        }
                    >
                        Tentang
                    </LinkScroll>
                    <LinkScroll
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onSetActive={() => {
                            setActiveLink("skills");
                        }}
                        className={
                            "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative hover:border-b-2 hover:border-sky-500" +
                            (activeLink === "skills"
                            ? " text-sky-500 animation-active "
                            : " text-black-500 dark:text-white hover:text-sky-500 ")
                        }
                        >
                        Keahlian
                        </LinkScroll>
                    <LinkScroll
                        activeClass="active"
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onSetActive={() => {
                            setActiveLink("portfolio");
                        }}
                        className={
                            "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative hover:border-b-2 hover:border-sky-500 w-auto" +
                            (activeLink === "portfolio"
                            ? " text-sky-500 animation-active "
                            : " text-black dark:text-white hover:text-sky-500 ")
                        }
                    >
                        Portfolio
                    </LinkScroll>
                    <LinkScroll
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onSetActive={() => {
                            setActiveLink("contact");
                        }}
                        className={
                            "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative hover:border-b-2 hover:border-sky-500 w-auto" +
                            (activeLink === "contact"
                            ? " text-sky-500 animation-active "
                            : " text-black dark:text-white hover:text-sky-500 ")
                        }
                    >
                        Kontak
                    </LinkScroll>
                </ul>
                <div className="col-start-10 col-end-12 font-medium flex justify-end items-center py-4">
                    <div className="flex pr-4 items-center">
                        <label className="swap swap-rotate items-center">
                            <input type="checkbox" 
                                value={isDarkMode ? 'dark' : 'light'}
                                className="hidden" 
                                id="dark-toggle" 
                                checked={isDarkMode}
                                onChange={handleDarkModeToggle}
                             />
                            
                            <svg className="swap-on fill-current w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
                            </svg>
                            
                            <svg className="swap-off fill-current w-6 h-6 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
                            </svg>
                            
                        </label>
                    </div>
                    
                </div>
            </nav>

            {/* Mobile Navigation */}
            <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 sm:px-8 shadow-t ">
                <div className="bg-white dark:bg-dark sm:px-3 w-full transition duration-500 ease-in-out">
                    <ul className="flex w-full justify-between items-center text-black dark:text-white">
                        <LinkScroll
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onSetActive={() => {
                            setActiveLink("about");
                        }}
                        className={
                            "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all" +
                            (activeLink === "about"
                            ? "  border-sky-500 text-sky-500"
                            : " border-transparent")
                        }
                        >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        Tentang
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            onSetActive={() => {
                                setActiveLink("skills");
                        }}
                        className={
                            "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                            (activeLink === "skills"
                            ? "  border-sky-500 text-sky-500"
                            : " border-transparent ")
                        }
                        >
                        {/* <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                        </svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M6 4.75A.75.75 0 0 1 6.75 4h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 4.75ZM6 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 10Zm0 5.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75a.75.75 0 0 1-.75-.75ZM1.99 4.75a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1v-.01ZM1.99 15.25a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1v-.01ZM1.99 10a1 1 0 0 1 1-1H3a1 1 0 0 1 1 1v.01a1 1 0 0 1-1 1h-.01a1 1 0 0 1-1-1V10Z" clipRule="evenodd" />
                        </svg>

                        Keahlian
                        </LinkScroll>
                        <LinkScroll
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            duration={1000}
                            onSetActive={() => {
                                setActiveLink("portfolio");
                            }}
                            className={
                            "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                            (activeLink === "portfolio"
                            ? "  border-sky-500 text-sky-500"
                            : " border-transparent ")
                        }
                        >
                        {/* <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M15.988 3.012A2.25 2.25 0 0 1 18 5.25v6.5A2.25 2.25 0 0 1 15.75 14H13.5V7A2.5 2.5 0 0 0 11 4.5H8.128a2.252 2.252 0 0 1 1.884-1.488A2.25 2.25 0 0 1 12.25 1h1.5a2.25 2.25 0 0 1 2.238 2.012ZM11.5 3.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v.25h-3v-.25Z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M2 7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7Zm2 3.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm0 3.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                        Portfolio
                        </LinkScroll>
                        <LinkScroll
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        onSetActive={() => {
                            setActiveLink("contact");
                        }}
                        className={
                            "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                            (activeLink === "contact"
                            ? "  border-sky-500 text-sky-500"
                            : " border-transparent ")
                        }
                        >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                        </svg>
                        Kontak
                        </LinkScroll>
                    </ul>
                </div>
            </nav>
            {/* End Mobile Navigation */}
        </header>
  )
}

export default Navbar