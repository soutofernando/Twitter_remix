import React, { FC } from 'react'
import { getPostsApi } from '~/types/typespost'
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
            {post.map((post) => (<Post key={post.post} userimg={post.img} userid={post.id} username={post.name} userpost={post.post} />))}
        </div>
    )
}

export default PostContainer