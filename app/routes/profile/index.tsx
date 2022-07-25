import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import React from 'react'
import ProfileContainer from '~/components/profile/profileContainer/ProfileContainer'
import { getUserProfileApi } from '~/features/api/Api'
import Layout from '~/Layout'
import { UserProfile } from '~/types/typesGetsApi'

export const loader: LoaderFunction = async () => {
    return { userProfile: await getUserProfileApi() }
}

const index = () => {

    const { userProfile } = useLoaderData<UserProfile>()

    return (
        <div>
            <Layout>
                <ProfileContainer userProfile={userProfile} />
            </Layout>
        </div>
    )
}

export default index