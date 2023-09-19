import CardFilme from "@/components/CardFilme";
import Titulos from "@/components/Titulos";
import { Star } from "lucide";
import { Warnes } from "next/font/google";

async function carregarDados(){
const url = "https://hp-api.onrender.com/api/characters";
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

export default async function Home() {

  const filmes = await carregarDados()

  return(
    //JSX
    <>

    <nav className="bg-cyan-950 p-2 flex gap-3 items-center">
      <h1 className = "text-3xl text-zinc-100 font-bold uppercase space-y-10" ><i>HOGWARTS</i></h1>
    <ul>
      <li className= "flex space-x-40 items-center">
          <a href="#" className = "text-zinc-300" ><i>FAVORITOS</i></a>
          <a href="#" className = "text-zinc-300" ><i>GRIFINORIA</i></a>
          <a href="#" className = "text-zinc-300" ><i>SONSERINA</i></a>
          <a href="#" className = "text-zinc-300" ><i>CORVINAL</i></a> 
          <a href="#" className = "text-zinc-300" ><i>LUFA-LUFA</i></a> 

      </li>
    </ul>
    </nav>

    <Titulos><i>Todos os personagens</i></Titulos>

      <section className='flex flex-wrap gap-2'>

        {
            filmes.map( filme => <CardFilme filme={filme}/>)
        }
      </section>

      <Titulos><i>Lançamentos</i></Titulos>
    </>
  )
}
