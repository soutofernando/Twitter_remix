import { getPostsApi, getUsersProfileApi, UserProfile } from "~/types/typesGetsApi"

export const getPostApi = async () => {
    const res = await fetch("http://localhost:8001/posts")

    return await res.json() as getPostsApi[]
}

//trocar para firebase

export const getUserProfileApi = async () => {
    const res = await fetch("http://localhost:8001/users")

    return await res.json() as getUsersProfileApi[]
}