import React, { FC } from 'react'
import { getPostsApi } from '~/types/typesGetsApi'
import Post from '../post/Post'

interface Props {
    post: getPostsApi[]
}

const PostContainer: FC<Props> = ({ post }) => {
    return (
        <div className='xl:px-8 px-4'>
            <h1>
                <span className='font-bold'>
                    Home
                </span>
            </h1>
            {post.map((post) => (<Post key={Math.random()} userimg={post.img} userid={post.id} username={post.name} userpost={post.post} postAttachment={post.postAttachment} />))}
        </div>
    )
}

export default PostContainer