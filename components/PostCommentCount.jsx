"use client"

import { useEffect, useState } from "react";

const PostCommentCount = ({ postId }) => {
    const [comment, setComment] = useState([]);

    useEffect(() => {
        const getPostComments = async () => {
            const response = await fetch('https://gorest.co.in/public/v2/posts/' + postId + '/comments')
            const data = await response.json();
            setComment(data);
        }

        getPostComments();
    }, []);

    return (
        <div className="text-sm text-slate-500">{comment.length} Komentar</div>
    )
}

export default PostCommentCount