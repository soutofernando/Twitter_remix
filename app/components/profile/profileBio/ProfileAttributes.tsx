import { Link } from '@remix-run/react'
import React from 'react'
import Icon from '~/ui/icon/Icon'

const ProfileAttributes = () => {
    return (
        <div className='text-gray-500 text-md font-medium'>
            <div className='flex items-center'>
                <Icon d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" className='w-6 h-6' />
                <span>
                    Rio de Janeiro, RJ
                </span>
            </div>
            <div className='flex'>
                <Icon d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" className='w-6 h-6' />
                <span>
                    Joined Jun 2018
                </span>
            </div>
            <div className='flex'>
                <Icon d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" className='w-6 h-6' />
                <Link to="/profile">
                    <span className='hover:underline'>
                        www.github.com
                    </span>
                </Link>
            </div>
        </div>
    )
}

export default ProfileAttributes