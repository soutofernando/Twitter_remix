import React, { FC } from 'react'

interface Props {
    userFollowing: number
    userFollowers: number
}

const Profilefollow: FC<Props> = ({ userFollowers, userFollowing }) => {
    return (
        <div className="flex font-medium text-gray-500 mt-3">
            <div>
                <span className='font-bold text-black'>{userFollowing}</span> Following
            </div>
            <div className='ml-4'>
                <span className='font-bold text-black'>{userFollowers}</span> Followers
            </div>
        </div>
    )
}

export default Profilefollow