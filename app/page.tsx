"use client"

import Image from 'next/image';
import { useState } from 'react';
import { FaPlay } from "react-icons/fa";
import { MdClose, MdMenu } from 'react-icons/md';

export default function Home() {
  const [sideNav, showSideNav] = useState(false);

  return (
    <main className="bg-white flex flex-col items-center">

      <div className={sideNav ? "w-[250px] translate-x-[0px] duration-300 z-10 fixed right-0 top-0 h-full bg-[#ffffff] shadow-2xl px-6 flex flex-col justify-between" : "w-[250px] translate-x-[250px] duration-300 z-10 fixed right-0 top-0 h-full bg-[#143F8D] shadow-2xl p-4 flex-col justify-between flex"}>
        <div>
          <div className='flex items-center justify-between w-full h-[10vh]'>
            <div className='flex items-center justify-between cursor-pointer'>
              <img src='logo.png' className=' h-[30px]' />
              <p className='text-[20px] font-semibold ml-2'>Apptify</p>
            </div>

            <MdClose onClick={() => showSideNav(false)} className="text-[28px] cursor-pointer "></MdClose>
          </div>

          <p className='text-[16px] font-semibold text-[#513eff] my-4 cursor-pointer'>Home</p>
          <p className='text-[16px] my-4 cursor-pointer'>About</p>
          <p className='text-[16px] my-4 cursor-pointer'>Services</p>
          <p className='text-[16px] my-4 cursor-pointer'>Projects</p>
          <p className='text-[16px] my-4 cursor-pointer'>Contact</p>
        </div>

        <div className='text-[10px] text-center'>
          <p>© 2024 Apptify. All Rights Reserved.</p>

          <div className='flex items-center justify-between mt-2 mx-[10%]'>
            {/* <p>Home Page</p> */}
            <a target='_blank' href='https://www.buildsuite.io/terms'>Terms of Use</a>
            <a target='_blank' className='cursor-pointer' href='https://www.buildsuite.io/privacy'>Privacy Policy</a>
          </div>
        </div>

      </div>

      <div className='w-full max-w-[1200px] px-[5%]'>
        <div className='flex items-center justify-between h-[10vh] w-full fade'>
          <div className='flex items-center justify-between cursor-pointer'>
            <img src='logo.png' className=' h-[40px]' />
            <p className='text-[24px] font-semibold ml-2'>Apptify</p>
          </div>

          <div className='flex items-center max-md:hidden'>
            <p className='text-[16px] text-[#513eff] font-semibold mr-6 cursor-pointer'>Home</p>
            <p className='text-[16px] text-slate-900 mr-6 cursor-pointer'>About</p>
            <p className='text-[16px] text-slate-900 mr-6 cursor-pointer'>Services</p>
            <p className='text-[16px] text-slate-900 mr-6 cursor-pointer'>Projects</p>
            <p className='text-[16px] text-slate-900 mr-6 cursor-pointer'>Contact</p>
            <button className='bg-[#513eff] font-semibold text-white px-6 py-3 duration-300 rounded-full border-2 shadow-lg hover:shadow-2xl hover:bg-white hover:border-[#3e5eff] hover:border-2 hover:text-[#3e5eff]'>Book a call</button>
          </div>

          <MdMenu className='hidden text-[28px] max-md:flex' onClick={() => showSideNav(true)}></MdMenu>
        </div>

        <div className='h-[75vh] max-lg:h-[60vh] max-sm:h-[50vh] flex flex-col items-center justify-start'>
          <p className='text-[24px] max-sm:text-[12px] mt-16 max-sm:mt-10 mb-4 slide'>One-Stop Solution For All Your Business Needs</p>
          <p className='text-[92px] max-xl:text-[72px] max-lg:text-[64px] max-md:text-[52px] max-sm:text-[32px] font-semibold leading-tight slide'>Creating <span className='text-[#513eff] font-bold'>Softwares</span></p>
          <p className='text-[92px] max-xl:text-[72px] max-lg:text-[64px] max-md:text-[52px] max-sm:text-[32px] font-semibold leading-tight mb-8 slide'>& Digital Excellence</p>
          <div className='flex items-center slide'>
            <button className='bg-[#513eff] text-white font-semibold px-14 max-sm:px-10 py-5  max-sm:py-4 duration-300 rounded-full border-2 shadow-lg mr-4 hover:shadow-xl hover:shadow-[#513eff81] hover:bg-white hover:border-[#3e5eff] hover:border-2 hover:text-[#3e5eff]'>Book a call</button>
            <button className='bg-[#513eff] text-white font-semibold p-5 max-sm:p-4 duration-300 rounded-full border-2 hover:shadow-[#513eff7c] hover:shadow-xl'><FaPlay /></button>
          </div>
        </div>
      </div>

      <div className='w-full h-max bg-[#513eff] flex flex-col items-center relative'>
        <div className='w-full max-w-[1200px] max-xl:px-[5%] py-[300px] max-md:py-[200px]'>
          <p className='text-[64px] max-xl:text-[52px]  max-md:text-[40px] max-sm:text-[28px] font-semibold leading-tight text-white'>Turning Your Ideas</p>
          <p className='text-[64px] max-xl:text-[52px]  max-md:text-[40px] max-sm:text-[28px] font-semibold leading-tight text-white'>Into Cutting-edge</p>
          <p className='text-[64px] max-xl:text-[52px]  max-md:text-[40px] max-sm:text-[28px] font-semibold leading-tight mb-12 text-white'>Technologies</p>
        </div>

        <img src='https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='absolute fadeLate rounded-md top-[-100px] h-[350px] w-[800px] object-cover max-md:h-[250px] max-md:w-[600px] max-sm:w-[80vw]' ></img>
      </div>
    </main>
  )
}
