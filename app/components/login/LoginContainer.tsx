import React from 'react'
import Logo from '../logo/Logo'
import LoginBtn from './loginBtn/LoginBtn'
import LoginBtnClose from './btnClose/LoginBtnClose'
import LoginForgotPwdBtn from './forgotPwdBtn/LoginForgotPwdBtn'
import LoginHeader from './loginHeader/LoginHeader'
import LoginInput from './loginInput/LoginInput'
import LoginLogo from './loginLogo/LoginLogo'
import LoginWithAppleBtn from './loginWithGoogle/LoginWithAppleBtn'
import LoginWithGoogleBtn from './loginWithGoogle/LoginWithGoogleBtn'
import { Link } from 'react-router-dom'

const LoginContainer = () => {
    return (
        <div className='flex justify-center py-11'>
            <div className='bg-black rounded-2xl text-white w-124 h-132'>
                <div className='justify-between xl:justify-start items-center flex p-4'>
                    <LoginBtnClose />
                    <div className='ml-58'>
                        <LoginLogo />
                    </div>
                </div>
                <div className='px-36 justify-center'>
                    <LoginHeader />
                    <div className='mt-4 w-full'>
                        <div>
                            <LoginWithGoogleBtn />
                        </div>
                        <div className='mt-6'>
                            <LoginWithAppleBtn />
                        </div>
                        <hr className='mt-6 border-gray-600' />
                        <div className='mt-6 w-full'>
                            <LoginInput />
                        </div>
                        <div className='mt-8'>
                            <LoginBtn />
                        </div>
                        <div className='mt-6'>
                            <LoginForgotPwdBtn />
                        </div>
                        <div className='mt-14'>
                            <span className='text-gray-600'>Don't have an account?</span>
                            <Link to="/login" className='text-bluetw hover:underline ml-3'>
                                Sign up
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginContainer