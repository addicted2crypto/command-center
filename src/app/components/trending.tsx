import Image from 'next/image';

import React from 'react';

export default function Trending() {
  return (
    <div className='flex'>
      <div className='flex justify-center h-20 p-3'>
      <Image 
    src="/fort.png" 
    alt="fort logo" 
    height={50} 
    width={100}
    
    />
   
    </div>
    <div className='w-2/3 h-[50rem] p-6 text-md'>Trending and what's hot section
    </div>
    <p className='p-8'>Tool links trending protocols and chains and marketing location 1</p>
    

    
    </div>
  )
}
