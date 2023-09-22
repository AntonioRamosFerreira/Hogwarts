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
    <nav className="bg-slate-500 p-2 flex gap-3 items-end">
        <h1 className="text-3xl text-zinc-100 font-bold uppercase">FIAP Filmes</h1>
        <ul>
          <li>
            <a href="/favoritos">favoritos</a>
          </li>
        </ul>
      </nav>
    <Titulos><i>Favoritos</i></Titulos>
    
    <Titulos>Favoritos</Titulos>

<section className='flex flex-wrap gap-2'>
  {filmes.map( filme => <CardFilme filme={filme}/>)}
</section>

</>
);
}