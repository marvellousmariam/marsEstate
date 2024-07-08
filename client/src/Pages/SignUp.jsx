import React from 'react'

const SignUp = () => {
  return (
    <div className='max-w-lg mx-auto mt-5'>
      
      <h1>Sign Up</h1>
      <div className='flex flex-col gap-4 '>
      <input type='text' placeholder='Full Name'/>
      <input type='text' placeholder='Email'/>
      <input type='text' placeholder='Password'/>
      <button className='bg-stone-700 '>Sign Up</button>
      </div>
    </div>
  )
}

export default SignUp
