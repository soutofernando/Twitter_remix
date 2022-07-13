import React, { FC, useContext } from 'react'
import { Link } from 'react-router-dom'
import { PostContext } from '~/utils/postProvider/PostProvider'
import MenuNavigation from './menuNavigation/MenuNavigation'


const MenuBar: FC = () => {

    const { setModalOpen } = useContext(PostContext)

    return (
        <div className='xl:px-8 px-4  sm:h-full sm:w-80 hidden lg:block'>
            <div >

                <MenuNavigation />

                <div className='mt-5'>
                    <Link to="/home">
                        <button className='bg-bluetw p-4 text-white font-semibold rounded-full w-full' onClick={() => setModalOpen(true)}>Tweet</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MenuBar