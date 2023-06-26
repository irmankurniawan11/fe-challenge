"use client"

import { useEffect, useState } from "react";
import PostUser from "./PostUser";

const PostComments = ({ postId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getPostComments = async () => {
            const response = await fetch('https://gorest.co.in/public/v2/posts/' + postId + '/comments')
            const data = await response.json();
            setComments(data);
        }

        getPostComments();
    }, []);

    return (
        <div className="mt-4">
            <h1 className="font-bold mb-3">Komentar ({comments.length})</h1>
            <div className="flex flex-col gap-2">
            {comments?.map((comment) => (
                <div className="flex flex-col p-5 border border-slate-100 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-300">
                            <span className="font-bold text-white">{comment.name?.slice(0, 1)}</span>
                        </div>
                        <div>
                            <h1 className="text-sm">{comment.name}</h1>
                            <p className="text-sm text-slate-500">{comment.email}</p>
                        </div>
                    </div>
                    <p className="text-sm leading-6">{comment.body}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default PostComments