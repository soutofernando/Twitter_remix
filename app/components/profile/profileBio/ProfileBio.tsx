import React from 'react'
import ProfileAttributes from './ProfileAttributes'
import ProfileDescription from './ProfileDescription'
import Profilefollow from './Profilefollow'
import ProfileUser from './ProfileUser'

const ProfileBio = () => {
    return (
        <div>
            <ProfileUser />
            <ProfileDescription />
            <ProfileAttributes />
            <Profilefollow />
        </div>
    )
}

export default ProfileBio