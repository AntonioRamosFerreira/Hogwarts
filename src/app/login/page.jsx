"use client"

import Image from "next/image";
import loginimage from "@/app/login/images/login2.jpg";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login (){
    const[email, setEmail] = useState("")
    const[senha, setSenha] = useState("")
    const { push } = useRouter ()

    function login(e){
        e.preventDefault()
    if(email === "ramosfrr2003@outlook.com.br" && senha === "123456"){
        push("/")
        console.log(email, senha)
    }else{
        alert("Credenciais inválidas")
    }
}


    return(
        <div className="flex h-screen">
            <aside className="hidden md:flex">
               <Image className="h-full w-full object-cover" src={loginimage} alt =""/>
            </aside>
        
            <main className="container m-auto max-w-md p-6">

                <h1 className="text x-1 font-bold">Personagens de Harry Potter</h1>
                <form onSubmit={login} className="flex flex-col">
                    <label htmlFor="email" >E-mail: </label>
                    <input 
                        className="bg-slate-400 p-1 rounded"   
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <label htmlFor="senha" >Senha: </label>
                    <input 
                        className="bg-slate-400 p-1 rounded" 
                        type="password" 
                        id="senha" 
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />
                    
                    <button className="bg-pink-600 p-2 mt-2 rounded-sm">entrar</button>
                </form>

            </main>

        </div>
    )
}