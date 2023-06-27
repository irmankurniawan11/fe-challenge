import { Suspense } from "react"
import PostList from "./PostList";

const Feed = async () => {
    return (
        <div className="container max-w-7xl mx-auto">
            <h1 className="text-4xl leading-[3rem] font-bold text-center my-8">Blog Post</h1>
            <PostList />
        </div>
    )
}

export default Feed