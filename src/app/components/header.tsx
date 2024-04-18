"use client"
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import Image from 'next/image';

import React from 'react';



export default function Header() {

  return ( <header className='p-5 flex bg-[#585757] w-auto'>
    
    
    <div className='flex flex-auto text-bold font-bold z-10 w-1/3 absolute top-8 left-8 text-[#383838] -mt-4 dark:text-[#d6d6d6] sm:flex-nowrap'>
      Command Center
      </div> 
      
      
      {/* add search bar component and bring it in here */}
      <div className='flex flex-1 p-8'>
      {/* <form className='flex justify-start pl-20 p-12'>search accounts, NFTs, tokens...</form> */}
      <Input type="search" placeholder='search accounts, NFTs, tokens...'className='flex justify-start pl-20 p-12 z-1 '/>
      </div>
      <div className='p-5'>
      
      <Button className='bg-[#737373] rounded-lg p-3 hover:translate-y-2'>Yeild yak</Button>
      </div>
      <div className='flex flex-grid font-serif w-1/3'>
      <div className='font-bold p-5'>View wallet</div>
      <div className='font-bold p-5'>Bridge</div>
      <div className='font-bold p-5'>View multichain</div>
      </div>
      <div className='font-semibold md:pl-[30rem] sm:pl-8 w-1/3'>
        <span className='p-8 absolute top-[2rem] right-[15rem] hover:translate-y-2 hidden lg:block'aria-hidden='true'>profile image/name</span>
        
            <div className='p-4 flex flex-1'> 
               {/* add Bring in a swap link */}
              <Button className='absolute top-[3.369rem] right-[7rem] hover:translate-y-1 hidden lg:block'>swap/bridge</Button>
                <Button className='p-3 absolute top-[1.5rem] right-6 rounded-full bg-current hover:rounded-lg hover:bg-[#3d2525] transition hover:translate-x-1'>🔔</Button>

            </div>
     </div>
     
    </header>
  )
}
