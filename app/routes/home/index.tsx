import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import React from 'react'
import { getPostApi } from '~/components/features/api/Api'
import PostContainer from '~/components/posts/postContainer/PostContainer'
import Layout from '~/Layout'
import { Posts } from '~/types/typespost'


export const loader: LoaderFunction = async () => {
    return { post: await getPostApi() }
}

const index = () => {

    const { post } = useLoaderData<Posts>()

    return (
        <div>
            <Layout>
                <PostContainer post={post} />
            </Layout>
        </div>
    )
}

export default index