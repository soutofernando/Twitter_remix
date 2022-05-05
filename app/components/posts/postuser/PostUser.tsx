import React, { FC } from 'react'

interface Props {
    username: string
}

const PostUser: FC<Props> = ({ username }) => {
    return (
        <div>
            <h1><span className='font-bold'>{username}</span></h1>
        </div>
    )
}

export default PostUser