"use client"
import { Button } from '@/components/ui/button';
import React from 'react';



export default function Header() {

  return ( <header className='p-5 flex flex-cols bg-[#585757]'>
    
    
    <h1 className='text-bold font-bold font-weight z-10 absolute top-3 left-3 text-[#383838] -mt-4 dark:text-[#d6d6d6]'>
      Command Center
      </h1> 
      <search className='pl-20 p-10 '>search accounts, NFTs, tokens...</search>
      <div className='p-5'>
      <Button className='bg-[#393838] rounded-lg'>Yeild yak</Button>
      </div>
      <div className='font-bold p-5'>View wallet</div>
      <div className='font-bold p-5'>Bridge</div>
      <div className='font-bold p-5'>View multichain</div>
      <section className='font-semibold md:pl-[30rem] sm:pl-8'>
        <image className='p-8'>profile image</image>
            <div>
                <button className='p-3'>notifications</button>

            </div>
     </section>
     
    </header>
  )
}
