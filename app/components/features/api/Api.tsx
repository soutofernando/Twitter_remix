import { getPostsApi } from "~/types/typespost"

export const getPostApi = async () => {
    const res = await fetch("http://localhost:8001")

    return (await res.json()).map(
        (
            {
                id,
                name,
                img,
                post,
            }: getPostsApi

        ) => (
            {
                id,
                name,
                img,
                post,
            }
        )
    )
}