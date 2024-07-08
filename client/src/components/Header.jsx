import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='flex justify-between items-center bg-slate-200 shadow-md p-3'>
       {/*Left */}
        <div className='flex font-semibold'>
       
            <h1 className='text-sm  sm:text-xl'>
                <span>
                    Mar's
                </span>
                <span>
                    Estate
                </span>
            </h1>
        </div>
      {/*right */}
      <ul className='flex gap-4'>
      <Link to="/">
      <li className='hidden sm:inline text-slate-600'>Home</li>
      </Link>
        <Link to="/about">
        <li  className='hidden sm:inline text-slate-600'>About</li>
        </Link>
        <Link to="/signin">
        <li  className='
         sm:inline text-slate-600'>Sign In</li>
        </Link>
      </ul>

      </div>
    </header>
  )
}

export default Header
