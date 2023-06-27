async function getUser(id) {
    const token = process.env.GOREST_TOKEN_CLIENT;
    const res = await fetch(`https://gorest.co.in/public/v2/users/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    const user = await res.json()
  
    return user;
  }

const PostUser = async ({ id }) => {
    const user = await getUser(id); 

    
    return (
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-300">
                <span className="font-bold text-white text-xs">{user?.name ? user?.name?.slice(0,1) : "-"}</span>
            </div>
            <h1 className="text-sm">{user?.name ? user.name : "User Deleted"}</h1>
        </div>
    )
}

export default PostUser