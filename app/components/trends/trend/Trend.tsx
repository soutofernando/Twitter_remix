import React from 'react'
import OutlineBtn from '~/ui/outlinebutton/OutlineBtn'
import UserImg from '~/ui/userimg/UserImg'
import TrendId from '../trendid/TrendId'
import TrendUser from '../trenduser/TrendUser'

const Trend = () => {
    return (
        <div>
            <div className='bg-gray-200 p-3 rounded-md xl:w-96 w-80 mt-2'>
                <div>
                    <div className='flex justify-between'>
                        <div className='flex'>
                            <div className='flex'>
                                <UserImg userimg="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"/>
                            </div>
                            <div>
                                <TrendUser />
                                <TrendId />
                            </div>
                        </div>
                        <OutlineBtn>Seguir</OutlineBtn>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trend