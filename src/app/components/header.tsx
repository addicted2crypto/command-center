"use client"
import { Button } from '@/components/ui/button';
import React from 'react';



export default function Header() {

  return ( <header className='p-5 flex bg-[#585757]'>
    
    
    <h1 className='flex flex-cols text-bold font-bold z-10 absolute top-10 left-10 text-[#383838] -mt-4 dark:text-[#d6d6d6]'>
      Command Center
      </h1> 
      <search className='pl-20 p-12 flex-auto'>search accounts, NFTs, tokens...</search>
      <div className='p-5'>
      <Button className='bg-[#393838] rounded-lg p-3'>Yeild yak</Button>
      </div>
      <h2 className='flex flex-cols font-serif'>
      <div className='font-bold p-5'>View wallet</div>
      <div className='font-bold p-5'>Bridge</div>
      <div className='font-bold p-5'>View multichain</div>
      </h2>
      <section className='font-semibold md:pl-[30rem] sm:pl-8 flex flex-cols'>
        <image className='p-8 absolute top-6 right-[6rem] '>profile image </image>
        
            <div>
              <a href="/swap" className='p-6 pt-2'>swap chains</a>
                <Button className='p-3 absolute top-6 right-6 rounded-lg hover:rounded-md hover:bg-[#3d2525] transition translate-x-2'>notifications</Button>

            </div>
     </section>
     
    </header>
  )
}
