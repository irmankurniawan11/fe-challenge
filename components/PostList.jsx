import Post from "./Post"

const PostList = ({ posts }) => {
    return (
        <div className="flex gap-2 flex-wrap justify-center">
            {posts.map((post) => (
                <Post key={post.id} data={post}/>
            ))}
        </div>
    )
}

export default PostList