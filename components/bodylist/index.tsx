import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Bodylist = () => {
  return (
    <div className="  flex flex-col w-[25rem] h-[30rem]  m-auto text-center border border-slate-100 shadow-2xl rounded-md bg-slate-100 translate-y-16 " >
        <div >
<h1 className='font-bold mt-6 text-lg'>Sign Up</h1>
<p className='text-gray-500 mb-6'>Lets get started with your 30 days free trial </p>
        </div>

        <div className=' flex flex-col items-center  '>
            <input className='w-72 rounded outline outline-gray-300 shadow-md focus:outline-none focus:ring  focus:border-blue-600  m-2 p-1'  type="text" placeholder={"Name"}/>
            <input className='w-72 rounded outline outline-gray-300 shadow-md focus:outline-none focus:ring  focus:border-blue-600  m-2 p-1' type="email"  placeholder={"Email"}/>
            <input className='w-72 rounded outline outline-gray-300 shadow-md focus:outline-none focus:ring  focus:border-blue-600  m-2 p-1' type="password"  placeholder={"Password"}/>
          
        </div>

        <div>
<Link href="/contact"><button className='w-72  m-2  border-2  bg-cyan-950 p-2 rounded-md  text-slate-50' type="submit">Sign Up</button></Link>
<p className='text-gray-500'>Already have an account?<Link className='text-sky-500' href="/about"> Log In</Link></p>

<p className='m-2'>or</p>
<button  className='w-72  p-1 m-auto  border-2 rounded-md  font-bold flex justify-center items-center ' type="submit"> <span><Image src="/image.png" alt='hv' width={30} height={30}/></span>  Sign  up with Google</button>
        <p className='text-gray-500'>By signing up to create an account l accept Company's <Link className='text-sky-500' href="/about">Terms of Use and Privacy Policy</Link></p>
        </div>
    </div>
  )
}

export default Bodylist