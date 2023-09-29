import CardFilme from "@/components/CardFilme";
import NavBar from "@/components/NavBar";
import Titulos from "@/components/Titulos";

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
    <NavBar/>


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
