import { Link } from '@remix-run/react'
import React from 'react'

const Logo = () => {
    return (
        <div className="flex-1 flex items-center justify-end sm:items-stretch lg:justify-start">
            <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                    <img
                        className="lg:block h-8 w-auto"
                        src="https://cdn-icons-png.flaticon.com/512/733/733579.png?w=360"
                        alt="twitter icon"
                    />
                </Link>
            </div>
        </div>
    )
}

export default Logo