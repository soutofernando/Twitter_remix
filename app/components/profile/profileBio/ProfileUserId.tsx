import React, { FC } from 'react'

interface Props{
    userId: string 
}

const ProfileUserId: FC<Props> = ({userId}) => {
    return (
        <div className='font-medium  text-sm text-gray-500'>
            <span>@{userId}</span>
        </div>
    )
}

export default ProfileUserId