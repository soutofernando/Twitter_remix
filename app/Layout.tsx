import React, { FC } from 'react'
import Footer from './components/common/footer/Footer'
import NavBar from './components/common/navbar/Navbar'
import MenuBar from './components/menu/Menu'
import TrendContainer from './components/trends/trendContainer/TrendContainer'

const Layout: FC = ({ children }) => {
    return (
        <div>
            <NavBar />

            <div className='lg:flex'>
                <div className='flex-2 lg:border-r-2'>
                    <MenuBar />
                </div>
                <div className='flex-1'>
                    <main>{children}</main>
                </div>
                <div className='flex-2 lg:border-l-2'>
                    <TrendContainer />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Layout