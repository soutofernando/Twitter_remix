import React, { FC } from 'react'

interface Props {
    userpost: string
}

const PostMessage: FC<Props> = ({ userpost }) => {
    return (
        <div className='w-full flex text-left'>
            <p>{userpost}</p>
        </div>
    )
}

export default PostMessage