"use client"

import Pagination from "@components/Pagination";
import { deleteUser, getUserList } from "@lib/api";
import Link from "next/link";
import { useEffect, useState } from "react"

const UserPage = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        getUserList(page).then((result)=>setUsers(result))
    }, [page])

    function handlePageChange(page) {
        setPage(page);
    }

    const onDeleteHandler = (id) => {
        deleteUser(id, ()=>{
            const updatedUsers = users.filter((row) => row.id !== id)
            setUsers(updatedUsers)
        })
    }

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2">
                <h1 className="font-bold text-3xl leading-[4rem]">User List</h1>
                <Link href="/users/add" className="btn">Tambah Data</Link>
            </div>
            <div className="overflow-x-auto max-w-full">
            <table className="table-fixed w-full">
                <thead>
                <tr className="border-b">
                    <th className="p-3 truncate">Name</th>
                    <th className="p-3 truncate">Email</th>
                    <th className="p-3 truncate">Gender</th>
                    <th className="p-3 truncate">Status</th>
                    <th className="p-3 truncate">Actions</th>
                </tr>
                </thead>
                <tbody>
                { users.map((user)=>{
                    return (
                        <tr key={user.id}>
                            <td className="p-3 truncate" title={user.name}>{user.name}</td>
                            <td className="p-3 truncate" title={user.email}>{user.email}</td>
                            <td className="p-3 truncate">{user.gender}</td>
                            <td className="p-3 truncate">{user.status}</td>
                            <td className="p-3">
                                <Link href={`/users/update/${user.id}`}>Edit</Link>
                                <button onClick={()=>onDeleteHandler(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            </div>
            <Pagination maxPage={10} onPageChange={(page)=>handlePageChange(page)}/>
        </div>
    )
}

export default UserPage