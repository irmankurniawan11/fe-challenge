"use client"

import { getPostList } from "@lib/api";
import Post from "./Post"
import Pagination from "./Pagination";
import { useEffect, useState } from "react";

const PostList = async () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        getPostList(page).then((result)=>setPosts(result))
    }, [page])

    function handlePageChange(page) {
        setPage(page);
    }

    return (
        <>
        <Pagination maxPage={10} onPageChange={(page)=>handlePageChange(page)}/>
        <div className="flex gap-2 flex-wrap justify-center">
            {posts.map((post) => (
                <Post key={post.id} postId={post.id} postUserId={post.user_id} postTitle={post.title} postBody={post.body}/>
            ))}
        </div>
        </>
    )
}

export default PostList