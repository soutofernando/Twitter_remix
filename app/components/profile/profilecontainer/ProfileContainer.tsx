import React, { FC } from 'react'
import { getUsersProfileApi } from '~/types/typesGetsApi'
import ProfileBackground from '../profileBackground/ProfileBackground'
import ProfileBio from '../profileBio/ProfileBio'
import ProfileUserImg from '../profileUserImg/ProfileUserImg'

interface Props {
    userProfile: getUsersProfileApi[]
}

const ProfileContainer: FC<Props> = ({ userProfile }) => {
    return (
        <div>
            {
                userProfile.map((user) => (<div>
                    <div className='h-80'>
                        <div className='h-44'>
                            <ProfileBackground userBg={user.profileBg} />
                        </div>
                        <div className='px-4'>
                            <ProfileUserImg userImg={user.profileImg} />
                        </div>
                    </div>
                    <div className='p-4'>
                        <ProfileBio userbio={user.bio}
                            userFollowing={user.following}
                            userFollowers={user.followers}
                            userId={user.id}
                            userLocation={user.location}
                            userJoined={user.joined}
                            userLink={user.link}
                            userName={user.name}

                             />
                    </div>
                </div>))
            }
        </div>
    )
}

export default ProfileContainer