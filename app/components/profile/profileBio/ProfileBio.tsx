import React, { FC } from 'react'
import ProfileAttributes from './ProfileAttributes'
import ProfileDescription from './ProfileDescription'
import Profilefollow from './Profilefollow'
import ProfileUser from './ProfileUser'

interface Props {
    userbio: string
    userFollowing: number
    userFollowers: number
    userId: string
    userLocation: string
    userJoined: string
    userLink: string
    userName: string
}

const ProfileBio: FC<Props> = ({ userFollowers, userFollowing, userId, userJoined, userLink, userLocation, userbio, userName }) => {
    return (
        <div>
            <ProfileUser userId={userId} userName={userName} />
            <ProfileDescription userbio={userbio} />
            <ProfileAttributes userLocation={userLocation} userJoined={userJoined} userLink={userLink} />
            <Profilefollow userFollowers={userFollowers} userFollowing={userFollowing} />
        </div>
    )
}

export default ProfileBio