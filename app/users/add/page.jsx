"use client"

import Link from "next/link";
import { useState } from "react"

const UserAddpage = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', gender: '', status: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev)=>({...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await processRegister(formData, (data)=>{
            setFormData({name: '', email: '', gender: '', status: ''})
            setShowAlert(true);
            setAlert({title:'Success', body:`Data dengan id:${data.id} berhasil ditambahkan!`})
        })
    }

    async function processRegister(data, callback=null) {
        try {
            const token = process.env.GOREST_TOKEN_CLIENT;
            const response = await fetch(`https://gorest.co.in/public/v2/users`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if(response.ok) {
                const createdUser = await response.json();
                console.log('User created:', createdUser)
                callback?.(createdUser)
            }
            else {
                console.log('Failed to create user:',response.body)
            }
        } catch (error) {
            console.log('Error: ', error)
        }

    }

    const [showAlert, setShowAlert] = useState(false);
    const [alert, setAlert] = useState({title:'', body:''})

    return (
        <div className="max-w-md mx-auto border border-slate-200 p-8 rounded-xl my-4">
            <Link href="/users" className="font-bold">&lt; Back</Link>
            <h1 className="text-3xl font-bold text-center my-2">Add New User</h1>
            { showAlert && (
                <DismissibleAlert title={alert.title} body={alert.body} dismiss={()=>{setShowAlert(false)}}/>
            )}
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

const DismissibleAlert = ({title, body, dismiss}) => {
    return (
        <div className={`flex flex-col gap-1 p-4 rounded-lg bg-green-200 border border-green-400 text-slate-800 my-4`}>
            <div className="flex justify-between">
                <h1 className="font-bold">{title}</h1>
                <button onClick={dismiss}>x</button>
            </div>
            <p>{body}</p>
        </div>
    )
}

export default UserAddpage