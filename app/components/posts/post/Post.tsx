import React, { FC } from 'react'
import IdUser from '~/ui/iduser/IdUser'
import UserImg from '~/ui/userimg/UserImg'
import PostMessage from '../postmessage/PostMessage'
import PostUser from '../postuser/PostUser'
import PublishedIn from '../publishedin/PublishedIn'

interface Props {
    username: string
    userid: string
    userpost: string
    userimg: string
}

const Post: FC<Props> = ({ username, userimg, userid, userpost }) => {
    return (
        <div className='bg-gray-200 p-3 rounded-md w-full mt-2'>
            <div>
                <div className='flex'>
                    <div className='flex'>
                        <div>
                            <UserImg userimg={userimg} />
                        </div>
                        <PostUser username={username} />
                        <div className='ml-2'>
                            <IdUser>{userid}</IdUser>
                        </div>
                        <div className='ml-2'>
                            <PublishedIn />
                        </div>
                    </div>
                </div>
                <div className='text-center mt-2 px-6'>
                    <PostMessage userpost={userpost} />
                </div>
            </div>
        </div>
    )
}

export default Post