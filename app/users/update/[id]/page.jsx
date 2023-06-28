"use client"

import { getUser, updateUser } from "@lib/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export async function generateStaticParams() {
    return [{ id: '1' }]
}

const UserEditPage = ({params}) => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '', email: '', gender: '', status: '',
    });

    useEffect(()=>{
        getUser(params.id).then((result) => {
            console.log(result);
            setFormData({name:result.name, email:result.email, gender:result.gender, status:result.status})
        });
    }, [])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev)=>({...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await updateUser(params.id, formData, ()=>{router.push('/users');})
    }

    return (
        <div className="max-w-md mx-auto border border-slate-200 p-8 rounded-xl my-4">
            <h1 className="text-3xl font-bold text-center">Edit User</h1>
            <form className="flex flex-col gap-4" method="post" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                    <label className="">Name</label>
                    <input required value={formData.name} onChange={handleChange} type="text" placeholder="Name" name="name" className="form-input rounded-lg border-slate-300" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="">Email</label>
                    <input required value={formData.email} onChange={handleChange} type="email" placeholder="Email" name="email" className="form-input rounded-lg border-slate-300" />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="">Gender</label>
                    <select required value={formData.gender} onChange={handleChange} name="gender" className="form-select rounded-lg border-slate-300">
                        <option value="" disabled>Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="flex flex-col gap-1">
                    <label className="">Status</label>
                    <select required value={formData.status} onChange={handleChange} name="status" className="form-select rounded-lg border-slate-300">
                        <option value="" disabled>Select</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
                <button className="rounded-lg py-3 px-4 bg-blue-500 font-bold text-white mt-4">Submit</button>
            </form>
        </div>
    )
}

export default UserEditPage