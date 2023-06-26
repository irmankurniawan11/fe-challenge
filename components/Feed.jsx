"use client"

import { useEffect, useState } from "react"
import PostList from "./PostList";

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const token = process.env.GOREST_TOKEN_CLIENT;
            console.log(token);
            try {
                const response = await fetch('https://gorest.co.in/public/v2/posts', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                setPosts(data);
            }
            catch (error) {
                console.log(error);
            }
        }

        fetchPosts();
    }, [])

    return (
        <div className="container max-w-7xl mx-auto">
            <h1 className="text-4xl leading-[3rem] font-bold text-center my-8">Blog Post</h1>
            <PostList posts={posts}/>
        </div>
    )
}



export default Feed