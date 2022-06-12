import React, { FC } from 'react'

const FilledBtn: FC = ({ children }) => {
    return (
        <div>
            <button className='bg-bluetw p-4 text-white font-semibold rounded-full w-full'>
                {children}
            </button>
        </div>
    )
}

export default FilledBtn