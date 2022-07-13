import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from '~/ui/icon/Icon'

const navigation = [
    { "span": "Home", "icon": "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", "link": "/home", "active": false },
    { "span": "Explorer", "icon": "M7 20l4-16m2 16l4-16M6 9h14M4 15h14", "link": "/explorer", "active": false },
    { "span": "Notifications", "icon": "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9", "link": "/notifications", "active": false },
    { "span": "Messages", "icon": "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z", "link": "/messages", "active": false },
    { "span": "Salved Items", "icon": "M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z", "link": "/salveditems", "active": false },
    { "span": "Lists", "icon": "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01", "link": "/lists", "active": false },
    { "span": "More", "icon": "M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z", "link": "/more", "active": false },
]

const profile = { "span": "Profile", "link": "/profile", "active": false }

interface Props {
    
}

const MenuNavigation: FC<Props> = () => {

    const location = useLocation()

    return (
        <div>
            {navigation.map((item) => (
                <Link key={item.span} to={item.link}>
                    <button className='w-full' onClick={() => { item.active = true }}>
                        <span className={location.pathname == item.link ? "flex font-medium font-arial text-lg items-center p-5 hover:bg-slate-200 hover:rounded-full text-bluetw" :
                            "flex font-medium font-arial text-lg items-center p-5 hover:bg-slate-200 hover:rounded-full"}>
                            <Icon className='w-8 h-8 mr-2' d={item.icon} />
                            {item.span}
                        </span>
                    </button>
                </Link>
            ))}

            <Link to={profile.link}>
                <button className='w-full' onClick={() => { profile.active = true }}>
                    <span className={ location.pathname == profile.link ? "flex font-medium font-arial text-lg items-center p-5 hover:bg-slate-200 hover:rounded-full text-bluetw" :
                        "flex font-medium font-arial text-lg items-center p-5 hover:bg-slate-200 hover:rounded-full"}>
        
                        <img src="https://i.pinimg.com/736x/79/20/5a/79205af1ee919d14fe4217ba8b123bc9.jpg" className='w-9 h-9 rounded-full mr-2' />
                        {profile.span}
                    </span>

                </button>
            </Link>
        </div>
    )
}

export default MenuNavigation