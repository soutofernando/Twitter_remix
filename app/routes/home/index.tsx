import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import React from 'react'
import PostModal from '~/components/modal/PostModal'
import PostContainer from '~/components/posts/postContainer/PostContainer'
import { getPostApi } from '~/features/api/Api'
import Layout from '~/Layout'
import { Posts } from '~/types/typesGetsApi'


export const loader: LoaderFunction = async () => {
    return {
        post: await getPostApi(),
    }
}

const index = () => {

    const { post } = useLoaderData<Posts>()

    return (
        <div>
            <Layout>
                <PostContainer post={post} />
                <PostModal />
            </Layout>
        </div>
    )
}

export default index