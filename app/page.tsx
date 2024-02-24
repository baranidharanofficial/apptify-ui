"use client"

import Image from 'next/image';
import { useState } from 'react';
import { FaPlay } from "react-icons/fa";
import { FcLike } from 'react-icons/fc';
import { FiTarget } from 'react-icons/fi';
import { LiaCopyright } from 'react-icons/lia';
import { MdBusiness, MdClose, MdColorLens, MdCopyright, MdDesignServices, MdDesktopMac, MdMenu, MdMobileFriendly, MdOutlineAnalytics, MdOutlineColorLens, MdOutlineDesktopMac, MdOutlineMediation } from 'react-icons/md';
import { RiRobot2Line } from 'react-icons/ri';

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
          <p className='text-[92px] max-xl:text-[72px] max-lg:text-[64px] max-md:text-[52px] max-sm:text-[32px] font-semibold leading-tight mb-8 slide'>Apps & Experiences</p>
          <div className='flex items-center slide'>
            <button className='bg-[#513eff] text-white font-semibold px-14 max-sm:px-10 py-5  max-sm:py-4 duration-300 rounded-full border-2 shadow-lg mr-4 hover:shadow-xl hover:shadow-[#513eff81] hover:bg-white hover:border-[#3e5eff] hover:border-2 hover:text-[#3e5eff]'>Book a call</button>
            <button className='bg-[#513eff] text-white font-semibold p-5 max-sm:p-4 duration-300 rounded-full border-2 hover:shadow-[#513eff7c] hover:shadow-xl'><FaPlay /></button>
          </div>
        </div>
      </div>

      <div className='w-full h-max bg-[#513eff] flex flex-col items-center relative'>
        <div className='w-full h-full max-w-[1200px] max-xl:px-[5%] pb-20 pt-[300px] max-md:pt-[200px] flex flex-col items-center'>
          <p className='text-[50px]  max-md:text-[40px] max-sm:text-[28px] font-semibold leading-tight text-white mb-10'>Who We Are</p>

          <div className='h-full flex items-center justify-between max-md:flex-col'>
            <div className='w-[25%] max-lg:w-[30%] max-md:w-full h-full flex flex-col max-md:flex-row max-md:mb-2 justify-between'>
              <p className='text-[50px]  max-md:text-[40px] max-sm:text-[24px] font-semibold leading-tight text-white'><span className='font-bold text-[62px]  max-md:text-[50px] max-sm:text-[32px]'>D</span>esign</p>
              <p className='text-[50px]  max-md:text-[40px] max-sm:text-[24px] font-semibold leading-tight text-white'><span className='font-bold text-[62px]  max-md:text-[50px] max-sm:text-[32px]'>D</span>evelop</p>
              <p className='text-[50px]  max-md:text-[40px] max-sm:text-[24px] font-semibold leading-tight text-white'><span className='font-bold text-[62px]  max-md:text-[50px] max-sm:text-[32px]'>D</span>eploy</p>
            </div>
            <p className='w-[75%] max-lg:w-[70%] max-md:w-full text-white text-[18px] max-lg:text-[15px] max-sm:text-[14px] text-justify'>Welcome to Apptify, your premier destination for cutting-edge software products and services.
              At Apptify, we're dedicated to revolutionizing the digital landscape by providing top-notch solutions tailored to meet your unique needs.
              Apptify is a dynamic team of seasoned professionals passionate about technology and innovation. With years of collective experience in the software industry,
              our experts are committed to delivering excellence in every project we undertake. At Apptify, we offer a comprehensive range of software products and services designed
              to empower businesses of all sizes. Whether you're a startup looking to establish your digital presence or an enterprise seeking advanced solutions, we've got you covered. </p>
          </div>

        </div>

        <img src='https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='absolute fadeLate rounded-md top-[-100px] h-[350px] w-[800px] object-cover max-md:h-[250px] max-md:w-[600px] max-sm:top-[-50px] max-sm:h-[200px] max-sm:w-[90vw]' ></img>
      </div>


      <div className='w-full h-max max-w-[1200px] max-xl:px-[5%] py-20 flex flex-col items-center'>
        <p className='text-[50px] max-md:text-[40px] max-sm:text-[28px] font-semibold leading-tight mb-10'>What We Provide</p>

        <div className='w-full grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1'>
          <div className='h-full w-full flex flex-col items-center rounded-lg shadow-[#513eff43] shadow-md p-8'>
            <MdOutlineColorLens className='text-[#513eff] text-[50px] mb-3' />
            <p className='text-xl mb-4 font-semibold'>UI/UX Design</p>
            <p className='text-[14px] text-justify'>Elevate your digital presence with captivating and intuitive user interfaces. Our UI/UX design experts combine creativity and functionality
              to deliver immersive experiences that keep your users engaged and delighted.</p>
          </div>
          <div className='h-full w-full flex flex-col items-center rounded-lg shadow-[#513eff43] shadow-md p-8'>
            <MdOutlineDesktopMac className='text-[#513eff] text-[50px] mb-3' />
            <p className='text-xl mb-4 font-semibold'>Web App Development</p>
            <p className='text-[14px] text-justify'>Unlock the potential of your business with our expert Web App Development service. From concept to deployment, our team crafts tailored solutions to enhance your online presence and streamline operations.</p>
          </div>
          <div className='h-full w-full flex flex-col items-center rounded-lg shadow-[#513eff43] shadow-md p-8'>
            <MdMobileFriendly className='text-[#513eff] text-[50px] mb-3' />
            <p className='text-xl mb-4 font-semibold'>Mobile App Development</p>
            <p className='text-[14px] text-justify'>Empower your brand with our Mobile App Development service. Our seasoned team specializes in crafting intuitive, high-performance apps tailored to your unique vision and audience.</p>
          </div>
          <div className='h-full w-full flex flex-col items-center rounded-lg shadow-[#513eff43] shadow-md p-8'>
            <MdOutlineAnalytics className='text-[#513eff] text-[50px] mb-3' />
            <p className='text-xl mb-4 font-semibold'>Business Analytics</p>
            <p className='text-[14px] text-justify'>Harnessing advanced data analytics techniques, we transform raw data into valuable insights, empowering your business to stay ahead in today's competitive landscape.</p>
          </div>
          <div className='h-full w-full flex flex-col items-center rounded-lg shadow-[#513eff43] shadow-md p-8'>
            <FiTarget className='text-[#513eff] text-[50px] mb-3' />
            <p className='text-xl font-semibold mb-4'>Marketing</p>
            <p className='text-[14px] text-justify'>Our seasoned team leverages innovative strategies and cutting-edge techniques to elevate your brand visibility, attract targeted audiences, and boost conversions.</p>
          </div>
          <div className='h-full w-full flex flex-col items-center rounded-lg shadow-[#513eff43] shadow-md p-8'>
            <RiRobot2Line className='text-[#513eff] text-[50px] mb-3' />
            <p className='text-xl font-semibold mb-4'>AI & ML Solutions</p>
            <p className='text-[14px] text-justify'>Stay ahead of the curve in today's rapidly evolving landscape with our cutting-edge AI & ML service. Empower your business with smarter decisions and transformative technology.</p>
          </div>
        </div>
      </div>

      <div className='py-6 bg-[#f0eeff] w-full text-center'>
        <div className='flex items-center justify-center'>
          <p className='mr-2'>Copyright</p>
          <LiaCopyright className='text-[20px] mr-2 text-[#513eff]' />
          <p className='mr-2'>2024 Apptify</p>
        </div>

      </div>

    </main>
  )
}
