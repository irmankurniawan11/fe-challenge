import { getComments } from "@lib/api"

const PostCommentCount = async ({ postId }) => {
    const comments = await getComments(postId)

    return (
        <div className="text-sm text-slate-500">{comments.length} Komentar</div>
    )
}

export default PostCommentCount