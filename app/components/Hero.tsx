import React from 'react'
import Image from 'next/image'

const Heros = () => {
  return (
<>
<div className='w-[100%]  md:place-items-center justify-center flex lg:flex-row min-[320px]:flex-col lg:justify-around  mt-[75px] mb-[100px]'>
  <div className='max-w-[550px] min-[320px]:text-center lg:text-start lg:mt-[130px]'>
    <p className=' text-[#6C58D4]'>Latest Technology</p>
    <h1 className='font-font min-[320px]:text-[30px]  md:text-[50px] text-[#4B33C6]  md:leading-[70px]'>
        CREATING YOUR  WEB APPS NEXT GEN
    </h1>
  
    <p className='font-light'>Making An App Never Been this Easy.</p>
    <div className=' w-full lg:max-w-[180px]  mt-[10px]'><button className='bg-[#6C58D4] shadow-lg shadow-[#6C58D4]/50 text-white  rounded-lg px-[10px] py-[5px] min-[320px]:mx-auto '>Get Us Now</button></div>
  </div>
  <div className='mt-[20px] min-[320px]:p-3'>
    <Image src={'/hero.jpg'} alt={''}  width={450} height={450} /> 
  </div>

</div>
</>
  )
}

export default Heros