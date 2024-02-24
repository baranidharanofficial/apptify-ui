"use client"

import { sendEmail } from '@/actions/sendEmail';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaPlay, FaShippingFast } from "react-icons/fa";
import { FcLike } from 'react-icons/fc';
import { FiTarget } from 'react-icons/fi';
import { LiaCopyright } from 'react-icons/lia';
import { MdBusiness, MdClose, MdColorLens, MdCopyright, MdDashboardCustomize, MdDesignServices, MdDesktopMac, MdExplore, MdMenu, MdMobileFriendly, MdMoney, MdNewReleases, MdOutlineAnalytics, MdOutlineColorLens, MdOutlineDesktopMac, MdOutlineMediation, MdPayment, MdSpeed, MdSupport, MdSupportAgent } from 'react-icons/md';
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

      <div id="home" className='w-full max-w-[1200px] px-[5%]'>
        <div className='flex items-center justify-between h-[10vh] w-full fade'>
          <div className='flex items-center justify-between cursor-pointer'>
            <img src='logo.png' className=' h-[40px]' />
            <p className='text-[24px] font-semibold ml-2'>Apptify</p>
          </div>

          <div className='flex items-center max-md:hidden'>
            <a href='#home' className='text-[16px] text-slate-900 mr-6 cursor-pointer'>Home</a>
            <a href='#about' className='text-[16px] text-slate-900 mr-6 cursor-pointer'>About</a>
            <a href='#services' className='text-[16px] text-slate-900 mr-6 cursor-pointer'>Services</a>
            <a href='#whyus' className='text-[16px] text-slate-900 mr-6 cursor-pointer'>Why us</a>
            <a href='#contact' className='text-[16px] text-slate-900 mr-6 cursor-pointer'>Contact</a>
            <a target="_blank" href="https://calendly.com/baranidharan/30min"><button className='bg-[#513eff] font-semibold text-white px-6 py-3 duration-300 rounded-full border-2 shadow-lg hover:shadow-2xl hover:bg-white hover:border-[#3e5eff] hover:border-2 hover:text-[#3e5eff]'>Book a call</button></a>
          </div>

          <MdMenu className='hidden text-[28px] max-md:flex' onClick={() => showSideNav(true)}></MdMenu>
        </div>

        <div className='h-max flex flex-col items-center justify-start pb-16 max-md:pb-12 max-sm:pb-8 mb-[100px] text-center'>
          <p className='text-[24px] max-sm:text-[12px] mt-16 max-sm:mt-10 mb-4 slide'>One-Stop Solution For All Your Business Needs</p>
          <p className='text-[92px] max-xl:text-[72px] max-lg:text-[64px] max-md:text-[52px] max-sm:text-[32px] font-semibold leading-tight slide'>Creating <span className='text-[#513eff] font-bold'>Softwares</span></p>
          <p className='text-[92px] max-xl:text-[72px] max-lg:text-[64px] max-md:text-[52px] max-sm:text-[32px] font-semibold leading-tight mb-8 slide'>Apps & Experiences</p>
          <div className='flex items-center slide'>
            <a target="_blank" href="https://calendly.com/baranidharan/30min"><button className='bg-[#513eff] text-white font-semibold px-14 max-sm:px-10 py-5  max-sm:py-4 duration-300 rounded-full border-2 shadow-lg mr-4 hover:shadow-xl hover:shadow-[#513eff81] hover:bg-white hover:border-[#3e5eff] hover:border-2 hover:text-[#3e5eff]'>Book a call</button></a>
            <button className='bg-[#513eff] text-white font-semibold p-5 max-sm:p-4 duration-300 rounded-full border-2 hover:shadow-[#513eff7c] hover:shadow-xl'><FaPlay /></button>
          </div>
        </div>
      </div>

      <div id="about" className='w-full flex flex-col items-center relative'>
        <div className='w-full h-max bg-[#513eff] flex flex-col items-center'>
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
        </div>

        <img src='https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className='fadeLate rounded-md absolute top-[-100px] h-[350px] w-[800px] object-cover max-md:h-[250px] max-md:w-[600px] max-sm:top-[-50px] max-sm:h-[200px] max-sm:w-[90vw]' ></img>
      </div>


      <div id="services" className='w-full h-max max-w-[1200px] max-xl:px-[5%] py-20 flex flex-col items-center'>
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

      <div id="whyus" className='w-full h-max bg-[#513eff] flex flex-col items-center'>
        <div className='w-full h-full max-w-[1200px] max-xl:px-[5%] py-20 flex flex-col items-center'>
          <p className='text-[50px]  max-md:text-[40px] max-sm:text-[28px] font-semibold leading-tight text-white mb-10'>What sets us apart</p>

          <div className='w-full grid grid-cols-4 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1'>
            <div className='h-full w-full flex flex-col items-center rounded-2xl text-[#ffffff] bg-[#ffffff0c] shadow-md p-8'>
              <MdSpeed className=' text-[150px] mb-3' />
              <p className='text-2xl italic mb-4 font-semibold'>Fast Delivery</p>
            </div>
            <div className='h-full w-full flex flex-col items-center rounded-2xl text-[#ffffff] bg-[#ffffff0c] shadow-md p-8'>
              <MdPayment className=' text-[150px] mb-3' />
              <p className='text-2xl italic mb-4 font-semibold'>Cost Efficient</p>
            </div>
            <div className='h-full w-full flex flex-col items-center rounded-2xl text-[#ffffff] bg-[#ffffff0c] shadow-md p-8'>
              <MdDashboardCustomize className=' text-[150px] mb-3' />
              <p className='text-2xl italic mb-4 font-semibold'>Customize</p>
            </div>
            <div className='h-full w-full flex flex-col items-center rounded-2xl text-[#ffffff] bg-[#ffffff0c] shadow-md p-8'>
              <MdSupportAgent className=' text-[150px] mb-3' />
              <p className='text-2xl italic mb-4 font-semibold'>24/7 Support</p>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className='w-full h-full max-w-[1200px] max-xl:px-[5%] py-20 flex flex-col items-center'>
        <p className='text-[50px]  max-md:text-[40px] max-sm:text-[28px] font-semibold leading-tight mb-10'>Contact Us</p>
        <div className='h-full flex items-center justify-between max-lg:flex-col-reverse'>
          <div className='w-[50%] max-lg:w-full h-[450px] flex shadow-xl rounded-3xl max-md:mt-2 max-sm:mt-4 max-sm:h-[300px]'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d243.99177097242853!2d79.81024833592399!3d11.914250107913379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1708754769822!5m2!1sen!2sin" width="600" height="450" className='w-full h-full rounded-3xl border-2 border-neutral-300' loading="lazy"></iframe>
          </div>

          <form action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent successfully!");
          }} className='w-[50%] max-lg:w-full p-10 max-sm:p-2'>
            <input className='w-full px-6 py-3 rounded-lg border-2 border-slate-100 bg-slate-100 mb-4 outline-none focus:border-[#513eff]' placeholder='Name' type='text' name="senderName" />
            <input className='w-full px-6 py-3 rounded-lg border-2 border-slate-100 bg-slate-100 mb-4 outline-none focus:border-[#513eff]' placeholder='Email' type='email' name="senderEmail" />
            <input className='w-full px-6 py-3 rounded-lg border-2 border-slate-100 bg-slate-100 mb-4 outline-none focus:border-[#513eff]' placeholder='Subject' type='text' name="subject" />
            <textarea className='w-full px-6 py-3 rounded-lg border-2 border-slate-100 bg-slate-100 mb-10 outline-none focus:border-[#513eff]' placeholder='Message' rows={4} name="message" />
            <br></br>
            <button type='submit' className='w-full py-4 cursor-pointer font-semibold rounded-lg text-white bg-[#513eff]'>Submit</button>
          </form>
        </div>
      </div>

      <div className='w-full h-max bg-[#f6f6f6] flex flex-col items-center'>
        <div className='w-full h-full max-w-[1200px] max-xl:px-[5%] py-10 flex items-start justify-between max-md:items-center max-md:flex-col'>

          <div className='flex flex-col items-start max-md:items-center max-md:mb-10'>
            <div className='flex items-center justify-start cursor-pointer mb-4'>
              <img src='logo.png' className=' h-[40px]' />
              <p className='text-[24px] font-semibold ml-2'>Apptify</p>
            </div>
            <p className='text-center'>One-Stop Solution For All Your Business Needs</p>
          </div>


          <div className='flex flex-col items-start max-md:items-center max-md:mb-10'>
            <p className='text-[18px] font-semibold text-slate-900 mb-3'>Quick links</p>
            <p className='text-[16px] text-slate-900 cursor-pointer mb-1'>Home</p>
            <p className='text-[16px] text-slate-900 cursor-pointer mb-1'>About</p>
            <p className='text-[16px] text-slate-900 cursor-pointer mb-1'>Services</p>
            <p className='text-[16px] text-slate-900 cursor-pointer mb-1'>Projects</p>
            <p className='text-[16px] text-slate-900 cursor-pointer mb-1'>Contact</p>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <p className='text-[18px] font-semibold text-slate-900 mb-3'>Find us on</p>
            <div className='grid grid-cols-3 grid-rows-2 gap-6'>
              <a target="_blank" href="https://www.linkedin.com/in/baranidharanb/"><img src='linkedin.webp' className=' cursor-pointer h-[40px]' /></a>
              <a target="_blank" href="https://www.instagram.com/"><img src='instagram.png' className='cursor-pointer h-[40px]' /></a>
              <a target="_blank" href="https://dribbble.com/b_barani"><img src='dribbble.png' className='cursor-pointer h-[40px]' /></a>
            </div>
          </div>
        </div>
      </div>


      <div className='py-4 bg-[#ececec] w-full text-center'>
        <div className='flex items-center justify-center text-[14px]'>
          <p className='mr-2'>Copyright</p>
          <LiaCopyright className='text-[20px] mr-2 text-[#513eff]' />
          <p className='mr-2'>2024 Apptify</p>
        </div>
      </div>

    </main >
  )
}
