import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Yakswap() {
  return (
    <div className='flex flex-col-2 pl-3 p-4'>
        <Image src="/yak.png" height={62} width={92} alt="yakswap image" ></Image>
    <Link href="https://yieldyak.com/avalanche/" className='text-3xl rounded-md pl-3 text-[#1b7e0a]'>Yakswap</Link>


    </div>
  )
}
