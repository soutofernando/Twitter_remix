import React from 'react'

const LoginWithGoogleBtn = () => {
    return (
        <div>
            <button className='rounded-full flex justify-center bg-white text-black font-medium items-center p-1 w-full'>
                <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" className='w-7 h-7' />
                <span className="ml-2">Sign in with Google</span>
            </button>
        </div>
    )
}

export default LoginWithGoogleBtn