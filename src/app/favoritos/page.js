import CardFilme from "@/components/CardFilme";
import Titulos from "@/components/Titulos";
import { Star } from "lucide";
import { Warnes } from "next/font/google";

async function carregarDados(){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTkyMjY2NzQ4MWFiMjA3ZDY0MjQ1MGIwZWZiNDYxZSIsInN1YiI6IjVlYTA5ZTZiYmU0YjM2MDAxYzU5NWExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vhu0pPCiIwmtrpyOHdBlQid8HJJllaHthn1MERS_ANg'
        }
      };
      
      const response = await fetch('https://hp-api.onrender.com/api/characters', options)
      const json = await response.json()
      console.log(json)
      return json.results
}

export default async function Favoritos() {

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

      <Titulos>Favoritos</Titulos>

      <section className='flex flex-wrap gap-2'>
        {filmes.map( filme => <CardFilme filme={filme}/>)}
      </section>

    </>
  );
}