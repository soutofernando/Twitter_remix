import { Link } from '@remix-run/react'
import React from 'react'
import Icon from '~/ui/icon/Icon'

const LoginBtnClose = () => {
    return (
        <div>
            <Link to="/home">
                <button onClick={() => { }} className="hover:bg-slate-900 p-1 rounded-full">
                    <Icon d="M6 18L18 6M6 6l12 12" className='w-6 h-6' />
                </button>
            </Link>
        </div>
    )
}

export default LoginBtnClose