import React, { FC } from 'react'

interface Props {
    name: string
}

const Icon: FC<Props> = ({ name }) => {
    return (
        <svg className='border-black border-2'>
            <use className='w-10 h-10' href={`../../static/icons.svg#${name}`} />
        </svg>
    )
}
export default Icon
