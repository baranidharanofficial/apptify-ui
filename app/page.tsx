import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-slate-900 flex min-h-screen flex-col items-center justify-center p-24">
      <img src='logo.png' className=' h-[100px] animate-pulse mb-4' />
      <p className='text-[16px] text-slate-400'>Launching Soon</p>
    </main>
  )
}
