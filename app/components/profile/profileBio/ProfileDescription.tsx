import React, { FC } from 'react'

interface Props {
    userbio: string
}

const ProfileDescription: FC<Props> = ({ userbio }) => {
    return (
        <div>
            <span>{userbio}</span>
        </div>
    )
}

export default ProfileDescription