import Link from "next/link"
import PostCommentCount from "./PostCommentCount"
import PostReadingTime from "./PostReadingTime"
import PostUser from "./PostUser"

const Post = ({ data }) => {
  return (
    <div className="flex flex-col justify-between max-w-lg bg-white gap-2 p-6 rounded-xl border border-slate-100">
      <div className="flex flex-col gap-2">
        <PostUser id={data.user_id} />
        <h1 className="font-bold text-lg">{data.title}</h1>
        <p className="text-sm">{data.body.slice(0, 100)}...</p>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div className="flex gap-2 items-center">
          <PostReadingTime postBody={data.body}/>
          <div className="w-1 h-1 rounded-full bg-slate-300"/>
          <PostCommentCount postId={data.id}/>
        </div>
        <Link href={`/post/`+data.id} className="btn">Read More</Link>
      </div>
    </div>
  )
}

export default Post