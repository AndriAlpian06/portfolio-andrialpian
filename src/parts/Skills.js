import React from 'react'

import HTML from '../images/skills/html.png';
import CSS from '../images/skills/css.png';
import JavaScript from '../images/skills/javascript.png';
import ReactImg from '../images/skills/react.png';
import Node from '../images/skills/node.png';
import GitHub from '../images/skills/github.png';
import Tailwind from '../images/skills/tailwind.png';
import Mongo from '../images/skills/mongo.png';

export default function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-white dark:bg-dark text-white'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='max-w-xl mx-auto text-center'>
              <p className='font-bold uppercase text-primary text-4xl inline border-b-4 border-pink-600'>Skills</p>
              <p className='py-2 font-medium text-base text-black dark:text-white'>// Ini adalah teknologi yang pernah saya kerjakan</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-2'>
              <div className='shadow-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4 text-black dark:text-white'>HTML</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4 text-black dark:text-white'>CSS</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4 text-black dark:text-white'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4 text-black dark:text-white'>REACT</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto bg-black' src={GitHub} alt="HTML icon" />
                  <p className='my-4 text-black dark:text-white'>GITHUB</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4 text-black dark:text-white'>NODE JS</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4 text-black dark:text-white'>MONGO DB</p>
              </div>
              <div className='shadow-md hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4 text-black dark:text-white'>Tailwind</p>
              </div>
          </div>
      </div>
    </div>
  )
}
