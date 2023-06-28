import Link from "next/link"

const Navbar = () => {
    return (
        <nav className='max-w-5xl mx-auto h-16 flex items-center justify-between px-8'>
            <h1><Link href="/" className='font-bold text-md'>FE Challenge</Link></h1>
            <ul className='flex items-center justify-end gap-2'>
                <li><Link className='px-4 py-2 font-bold' href="/">Blog</Link></li>
                <li><Link className='px-4 py-2 font-bold' href="/users">Users</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar