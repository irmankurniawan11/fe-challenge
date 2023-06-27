import PostCommentCount from "@components/PostCommentCount";
import PostComments from "@components/PostComments";
import PostReadingTime from "@components/PostReadingTime";
import PostUser from "@components/PostUser";
import Link from "next/link";

export async function generateStaticParams() {
  return [{ id: '1' }]
}

async function getPost(params) {
  const token = process.env.GOREST_TOKEN_CLIENT;
  const res = await fetch(`https://gorest.co.in/public/v2/posts/${params.id}`, {
      headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
      }
  })
  const post = await res.json()

  return post;
}

const PostDetail = async ({ params }) => {
  const post = await getPost(params);

  return (
    <div className="container max-w-xl mx-auto py-4">
      {post.message && "404 Page not found."}
      <Link href={'/'} className="font-bold text-lg">Back to post</Link>
      {post.id && (
        <div className="flex flex-col justify-between bg-white gap-2 my-4 p-6 rounded-xl border border-slate-100">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-3xl">{post.title}</h1>
            <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
              <PostUser id={post.user_id} />
              <div className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block" />
              <div className="flex gap-2 items-center">
                <PostReadingTime postBody={post.body} />
                <div className="w-1 h-1 rounded-full bg-slate-300" />
                <PostCommentCount postId={post.id} />
              </div>
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
