import React, { FC } from 'react'

interface Props {
    userBg: string
}

const ProfileBackground: FC<Props> = ({ userBg }) => {
    return (
        <div>
            <img src={userBg} className='w-full h-64' />
        </div>
    )
}

export default ProfileBackground