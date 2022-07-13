import React, { FC } from 'react'

interface Props {
    postAttachment?: string
}

const PostAttachment: FC<Props> = ({ postAttachment }) => {
    return (
        <div>
            <img src={postAttachment} className="w-full h-full" />
        </div>
    )
}

export default PostAttachment