"use client"

import { serverLogout } from "@/actions/auth";
import  Link  from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar(){
    const {push} = useRouter()

    function logout(){
        serverLogout()
        push("/login")
       }
    
    return (
        <nav className="bg-slate-500 p-2 flex gap-3 items-end">
        
        <Link href="/">
        <h1 className="text-3xl text-rose-600 font-bold uppercase">Hogwarts</h1>
        </Link>
        <Link href='/favoritos'>favoritos</Link>
        <Link href='/favoritos'> grifinoria</Link>
        <Link href='/favoritos'> corvinal</Link>
        <Link href='/favoritos'> sonserina</Link>
        <Link href='/favoritos'> lufa-lufa</Link>
            <button onClick={logout}>  logout</button>
          
      </nav>
    )
}