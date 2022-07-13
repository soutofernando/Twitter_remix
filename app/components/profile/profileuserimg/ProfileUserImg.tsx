import React, { FC } from 'react'
interface Props {
    userImg: string
}

const ProfileUserImg: FC<Props> = ({ userImg }) => {
    return (
        <div>
            <img className="h-36 w-36 rounded-full mr-2"
                src={userImg}
                alt="profile user img" />
        </div>
    )
}

export default ProfileUserImg