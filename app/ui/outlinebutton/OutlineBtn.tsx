import React, { FC } from 'react'

const OutlineBtn: FC = ({ children }) => {
    return (
        <div>
            <button className='border-2 border-bluetw p-2 text-semibold text-bluetw rounded-full font-semibold'>{children}</button>
        </div>
    )
}

export default OutlineBtn