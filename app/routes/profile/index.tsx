import React from 'react'
import MenuBar from '~/components/menu/Menu'
import ProfileContainer from '~/components/profile/profileContainer/ProfileContainer'
import TrendContainer from '~/components/trends/trendContainer/TrendContainer'
import Layout from '~/Layout'

const index = () => {
    return (
        <div>
            <Layout>
                <ProfileContainer />
            </Layout>
        </div>
    )
}

export default index