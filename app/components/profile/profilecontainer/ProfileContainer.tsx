import React from 'react'
import ProfileBackground from '../profileBackground/ProfileBackground'
import ProfileBio from '../profileBio/ProfileBio'
import ProfileUserImg from '../profileUserImg/ProfileUserImg'

const ProfileContainer = () => {
    return (
        <div>
            <div className='h-80'>
                <div className='h-44'>
                    <ProfileBackground />
                </div>
                <div className='px-4'>
                    <ProfileUserImg />
                </div>
            </div>
            <div className='p-4'>
                <ProfileBio />
            </div>
        </div>
    )
}

export default ProfileContainer