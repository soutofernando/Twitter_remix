import React, { FC } from 'react'


interface Props {
    userimg: string
}

const UserImg: FC<Props> = ({ userimg }) => {
    return (
        <div>
            <img className="h-10 w-10 rounded-full mr-2"
                src={userimg}
                alt="user img" />
        </div>
    )
}

export default UserImg