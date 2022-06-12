import { getPostsApi } from "~/types/typespost"

export const getPostApi = async () => {
    const res = await fetch("http://localhost:8001/posts")

    return await res.json() as getPostsApi[]
}