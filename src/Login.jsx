import React from 'react'


const Login = () => {
  return (
    <div className='flex'>
        <div className='w-1/2'>
            <h1 className=''>Login</h1>
            <p className='text-sm'>Login to access your Golobe account</p>
            <fieldset className='border-2 w-2/3 mt-4 mx-4 rounded-md'>
                <legend className=' ml-3 text-sm'>Email</legend>
                <input className='w-full outline-none px-2' />
            </fieldset>
            <fieldset className='border-2 w-2/3 mt-4 mx-4 rounded-md'>
                <legend className='text-sm'>Password</legend>
                <input className='w-full outline-none px-2' type='password'/>
            </fieldset>
            <div className="flex justify-between w-2/5 mx-4 mt-2">
                <div className='flex space-x-1 pl-2'>
                    <input type='checkbox'></input>
                    <p>Remember me</p>
                </div>
                <p className='text-red-400 text-sm'>Forgot Password</p>
            </div>
            <button className='w-2/3 mx-4 py-2 rounded-md font-semibold bg-emerald-200'>Login</button>
        </div>
        <div className='border-4'></div>

    </div>
  )
}

export default Login