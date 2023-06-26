"use client";

import Post from "@components/Post";
import PostCommentCount from "@components/PostCommentCount";
import PostComments from "@components/PostComments";
import PostReadingTime from "@components/PostReadingTime";
import PostUser from "@components/PostUser";
import { PageNotFoundError } from "next/dist/shared/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const PostDetail = ({ params }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(
        "https://gorest.co.in/public/v2/posts/" + params.id
      );
      const data = await response.json();
      setPost(data);
    };

    getPost();
  }, []);

  return (
    <div className="container max-w-xl mx-auto py-4">
      {post.message && "404 Page not found."}
      <Link href={'/'} className="font-bold text-lg">Back to post</Link>
      {post.id && (
        <div className="flex flex-col justify-between bg-white gap-2 my-4 p-6 rounded-xl border border-slate-100">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-3xl">{post.title}</h1>
            <div className="flex gap-2 items-center">
              <PostUser id={post.user_id} />
              <div className="w-1 h-1 rounded-full bg-slate-300" />
              <PostReadingTime postBody={post.body} />
              <div className="w-1 h-1 rounded-full bg-slate-300" />
              <PostCommentCount postId={post.id} />
            </div>
            <p className="leading-loose">{post.body}</p>
          </div>
          <PostComments postId={post.id}/>
        </div>
      )}
    </div>
  );
};

export default PostDetail;
