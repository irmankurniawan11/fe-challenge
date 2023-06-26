"use client"

import { useEffect, useState } from "react"

const PostUser = ({ id }) => {
    const [user, setUser] = useState({});

    useEffect(()=> {
        const getUserDetails = async () => {
            const response = await fetch('https://gorest.co.in/public/v2/users/'+id)
            const data = await response.json();
            setUser(data);
        }

        getUserDetails();
    }, []);

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