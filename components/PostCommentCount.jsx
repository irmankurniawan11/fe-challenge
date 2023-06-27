async function getComments(postId) {
    const token = process.env.GOREST_TOKEN_CLIENT;
    const res = await fetch(`https://gorest.co.in/public/v2/posts/${postId}/comments`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        cache: 'no-cache'
    })
    const comments = await res.json()
  
    return comments;
  }

const PostCommentCount = async ({ postId }) => {
    const comments = await getComments(postId)

    return (
        <div className="text-sm text-slate-500">{comments.length} Komentar</div>
    )
}

export default PostCommentCount