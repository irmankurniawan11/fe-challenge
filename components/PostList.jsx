import Post from "./Post"

async function getPosts() {
    const token = process.env.GOREST_TOKEN_CLIENT;
    const res = await fetch(`https://gorest.co.in/public/v2/posts`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        cache: 'no-cache'
    })
    const posts = await res.json()

    return posts;
}



const PostList = async () => {
    const posts = await getPosts();

    return (
        <div className="flex gap-2 flex-wrap justify-center">
            {posts.map((post) => (
                <Post key={post.id} postId={post.id} postUserId={post.user_id} postTitle={post.title} postBody={post.body}/>
            ))}
        </div>
    )
}

export default PostList