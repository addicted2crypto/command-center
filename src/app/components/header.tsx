"use client"
import { Button } from '@/components/ui/button';
import React from 'react';



export default function Header() {

  return ( <header className='p-5 flex bg-[#585757] w-auto'>
    
    
    <h1 className='flex flex-auto text-bold font-bold z-10 w-1/3 absolute top-10 left-10 text-[#383838] -mt-4 dark:text-[#d6d6d6] sm:flex-nowrap'>
      Command Center
      </h1> 
      <search className='flex justify-start pl-20 p-12 flex-auto'>search accounts, NFTs, tokens...</search>
      <div className='p-5'>
      <Button className='bg-[#393838] rounded-lg p-3 hover:translate-y-2'>Yeild yak</Button>
      </div>
      <h2 className='flex flex-grid font-serif w-1/3'>
      <div className='font-bold p-5'>View wallet</div>
      <div className='font-bold p-5'>Bridge</div>
      <div className='font-bold p-5'>View multichain</div>
      </h2>
      <section className='font-semibold md:pl-[30rem] sm:pl-8 w-1/3'>
        <image className='p-8 absolute top-[2rem] right-[6rem] hover:translate-y-2'aria-hidden='true'>profile image/name</image>
        
            <div>
              <a href="/swap" className='pt-2 pr-[2rem] hover:'>swap chains</a>
                <Button className='p-3 absolute top-[1.5rem] right-6 rounded-full bg-current hover:rounded-lg hover:bg-[#3d2525] transition hover:translate-x-1'>🔔</Button>

            </div>
     </section>
     
    </header>
  )
}
