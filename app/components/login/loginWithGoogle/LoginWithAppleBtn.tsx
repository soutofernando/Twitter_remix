import React from 'react'

const LoginWithAppleBtn = () => {
    return (
        <div>
            <div>
                <button className='rounded-full flex justify-center bg-white text-black font-bold items-center p-1 w-full'>
                    <img src="http://simpleicon.com/wp-content/uploads/apple.png" className='w-7 h-7' />
                    <span className="ml-2">Sign in with Apple</span>
                </button>
            </div>
        </div>
    )
}

export default LoginWithAppleBtn