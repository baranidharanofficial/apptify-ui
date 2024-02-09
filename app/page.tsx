import Image from 'next/image';
import { FaPlay } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-white flex flex-col items-center">
      <div className='w-full max-w-[1200px]'>
        <div className='flex items-center justify-between h-[10vh] w-full'>
          <div className='flex items-center justify-between cursor-pointer'>
            <img src='logo.png' className=' h-[40px]' />
            <p className='text-[24px] font-semibold ml-2'>Apptify</p>
          </div>

          <div className='flex items-center'>
            <p className='text-[16px] text-violet-600 mr-6 cursor-pointer'>Home</p>
            <p className='text-[16px] text-slate-900 mr-6 cursor-pointer'>About</p>
            <p className='text-[16px] text-slate-900 mr-6 cursor-pointer'>Services</p>
            <p className='text-[16px] text-slate-900 mr-6 cursor-pointer'>Projects</p>
            <p className='text-[16px] text-slate-900 mr-6 cursor-pointer'>Contact</p>
            <button className='bg-violet-600 text-white px-6 py-3 duration-300 rounded-full border-2 shadow-lg hover:shadow-2xl hover:bg-white hover:border-purple-600 hover:border-2 hover:text-purple-700'>Book a call</button>
          </div>
        </div>

        <div className='h-[80vh] flex flex-col items-start justify-center'>
          <p className='text-[24px] mb-4'>One-Stop Solution For All Your Business Needs</p>
          <p className='text-[92px] font-semibold leading-tight'>Creating <span className='text-violet-600'>Softwares</span></p>
          <p className='text-[92px] font-semibold leading-tight mb-16'>& Digital Excellence</p>
          <div className='flex items-center'>
            <button className='bg-violet-600 text-white font-semibold px-14 py-5 duration-300 rounded-full border-2 shadow-lg mr-4 hover:shadow-2xl hover:bg-white hover:border-violet-600 hover:border-2 hover:text-violet-700'>Book a call</button>
            <button className='bg-blue-600 text-white font-semibold px-5 py-5 duration-300 rounded-full border-2 shadow-lg hover:shadow-2xl'><FaPlay /></button>
          </div>
        </div>
      </div>

      <div className='w-full h-max bg-violet-600 flex flex-col items-center relative'>
        <div className='w-full max-w-[1200px] py-32'>
          <p className='text-[64px] font-semibold leading-tight text-white'>Turning Your Ideas</p>
          <p className='text-[64px] font-semibold leading-tight text-white'>Into Cutting-edge</p>
          <p className='text-[64px] font-semibold leading-tight mb-12 text-white'>Technologies</p>
        </div>

        <img src='https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' className=' absolute right-0 top-[-175px] h-[350px] w-[700px] object-cover' ></img>
      </div>
    </main>
  )
}
