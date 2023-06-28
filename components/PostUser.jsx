import { getUser } from "@lib/api";

const PostUser = async ({ id }) => {
    const user = await getUser(id); 

    return (
        <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-300">
                <span className="font-bold text-white text-xs">{user?.name.slice(0,1)}</span>
            </div>
            <h1 className="text-sm">{user?.name}</h1>
        </div>
    )
}

export default PostUser