export interface getPostsApi {
    img: string
    postAttachment?: string
    id: string
    name: string
    post: string
}

export interface getUsersProfileApi {
    name: string
    profileImg: string
    profileBg: string
    id: string
    bio: string
    location: string
    joined: string
    link: string
    following: number
    followers: number
}

export interface UserProfile {
    userProfile: getUsersProfileApi[]
}

export interface Posts {
    post: getPostsApi[]
}