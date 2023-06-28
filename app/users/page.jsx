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
        if(confirm("Anda yakin ingin menghapus data ini?")) {
        deleteUser(id, ()=>{
            const updatedUsers = users.filter((row) => row.id !== id)
            setUsers(updatedUsers)
            getUserList(page).then((result)=>setUsers(result))
        })
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center gap-2 mt-8 mb-12">
                <h1 className="font-bold text-3xl leading-[3rem]">User List</h1>
                <Link href="/users/add" className="btn">Tambah Data</Link>
            </div>
            <div className="max-w-3xl mx-auto flex flex-col border border-slate-200 rounded-xl">
                {users.map((user) => {
                    return (
                        <UserCard key={user.id} user={user} onDeleteHandler={onDeleteHandler}/>
                    )
                })}
            </div>
            <Pagination maxPage={10} onPageChange={(page)=>handlePageChange(page)}/>
        </div>
    )
}

const TableUser = ({users}) => {
    return (
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
                            <td className="p-3 flex gap-2">
                                <Link href={`/users/update/${user.id}`} className="btn">Edit</Link>
                                <button onClick={()=>onDeleteHandler(user.id)} className="btn btn-delete">Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

import { EllipsisVerticalIcon, PencilSquareIcon, TrashIcon, UserIcon } from '@heroicons/react/24/solid'

const UserCard = ({user, onDeleteHandler}) => {
    return (
        <div className="flex items-center justify-between gap-3 p-4 border-b border-slate-100 w-full">
            <div className="flex justify-between items-center gap-4 w-full">
                <div className="relative flex-none">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full shrink-0 overflow-hidden ring-2 ${(user.gender == 'male') ? "bg-blue-300 ring-blue-300" : " bg-pink-300 ring-pink-300"}`}>
                        <UserIcon className="w-12 h-12 text-white translate-y-2"></UserIcon>
                    </div>
                    <div className={`absolute right-0 top-0 w-3 h-3 rounded-full ring-4 ${user.status == "active" ? "bg-green-300 ring-green-200/80 animate-bounce" : "bg-slate-300 ring-slate-200/80"}`}></div>
                </div>
                <div className="flex items-center gap-4 flex-auto overflow-hidden">
                    <div className="flex flex-col w-full overflow-hidden">
                        <h1 className="font-bold text-md truncate">{user.name}</h1>
                        <p className="text-slate-400 truncate">{user.email}</p>
                    </div>
                </div>
                <div className="hidden md:hidden flex-none py-2 items-center justify-center text-slate-600"><EllipsisVerticalIcon className="w-6 h-6"/></div>
                <div className="flex md:flex flex-none items-center justify-end gap-2">
                <Link href={`/users/update/${user.id}`} className="text-slate-600 font-bold py-3 px-3 flex items-center justify-center gap-2 rounded-lg border border-slate-200"><PencilSquareIcon className="w-5 h-5"/><span className="hidden sm:block"> Edit</span></Link>
                <button onClick={()=>onDeleteHandler(user.id)} className="text-red-600 font-bold py-3 px-3 flex items-center justify-center gap-2 rounded-lg border border-slate-200"><TrashIcon className="w-5 h-5"/><span className="hidden sm:block"> Delete</span></button>
            </div>
            </div>
        </div>
    )
}

export default UserPage