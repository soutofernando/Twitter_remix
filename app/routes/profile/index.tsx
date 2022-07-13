import { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import React from 'react'
import { getUserProfileApi } from '~/components/features/api/Api'
import MenuBar from '~/components/menu/Menu'
import ProfileContainer from '~/components/profile/profileContainer/ProfileContainer'
import TrendContainer from '~/components/trends/trendContainer/TrendContainer'
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