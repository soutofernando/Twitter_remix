import React, { FC } from 'react'
import ProfileUserId from './ProfileUserId'

interface Props {
    userName: string
    userId: string
}

const ProfileUser: FC<Props> = ({ userId, userName }) => {
    return (
        <div>
            <div className='font-bold text-lg mb-2'>
                <span>{userName}</span>
                <ProfileUserId userId={userId}/>
            </div>
        </div>
    )
}

export default ProfileUser