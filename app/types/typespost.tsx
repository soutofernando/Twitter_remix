export interface getPostsApi {
    img: string
    id: string
    name: string
    post: string
}

export interface Posts {
    post: getPostsApi[]
}