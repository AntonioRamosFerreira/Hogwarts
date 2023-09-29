"use client"
import { useEffect, useState } from "react"
import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconoutline } from '@heroicons/react/24/outline'

export default function CardFilme({filme}){
  const [ favorito, setFavorito ] = useState(false) //hooks
  const image_url = "https://hp-api.onrender.com/api/characters" + filme.poster_path

  useEffect(() => {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
    const favorito = favoritos.find(f => f.id === filme.id)
    setFavorito(favorito)
  }, [])

    function favoritar(){
      setFavorito(true)

      const options = {  
        method: 'POST',  
        headers: {
              accept: 'application/json',
                  'content-type': 'application/json',
                      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTkyMjY2NzQ4MWFiMjA3ZDY0MjQ1MGIwZWZiNDYxZSIsInN1YiI6IjVlYTA5ZTZiYmU0YjM2MDAxYzU5NWExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vhu0pPCiIwmtrpyOHdBlQid8HJJllaHthn1MERS_ANg'  
                    },  body: JSON.stringify({media_type: 'movie', media_id: filme.id, watchlist: true})
                  };
                  fetch('https://hp-api.onrender.com/api/characters', options)
                    .then(response => response.json())  
                    .then(response => console.log(response))  
                    .catch(err => console.error(err));

      let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
      favoritos.push(filme)
      localStorage.setItem("favoritos", JSON.stringify(favoritos))

    }

    function desfavoritar(){
      setFavorito(false)

      const options = {  
        method: 'POST',  
        headers: {
              accept: 'application/json',
                  'content-type': 'application/json',
                      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZTkyMjY2NzQ4MWFiMjA3ZDY0MjQ1MGIwZWZiNDYxZSIsInN1YiI6IjVlYTA5ZTZiYmU0YjM2MDAxYzU5NWExNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Vhu0pPCiIwmtrpyOHdBlQid8HJJllaHthn1MERS_ANg'  
                    },  body: JSON.stringify({media_type: 'movie', media_id: filme.id, watchlist: false})
                  };
                  fetch('https://api.themoviedb.org/3/account/9269654/watchlist', options)
                    .then(response => response.json())  
                    .then(response => console.log(response))  
                    .catch(err => console.error(err));

      let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
      const favoritosAtualizados = favoritos.filter(f => f.id !== filme.id)
      localStorage.setItem("favoritos", JSON.stringify(favoritosAtualizados))

    }
  
    return(
        <div className="flex flex-col items-center justify-between w-40 m-2 gap-1 relative">
          {favorito ?
            <HeartIcon 
              className="h-6 w-6 text-red-600 absolute top-1 right-2 cursor-pointer"
              onClick={desfavoritar}
            />
            :
            <HeartIconoutline 
              className="h-6 w-6 absolute top-1 right-2 cursor-pointer hover:text-red-600"
              onClick={favoritar}
            />
          }


          <img className="rounded h-56" src={filme.image} alt="imagem personagem"/>

          <span className="font-bold text-lg w-full line-clamp-1 text-center">
            {filme.name}
          </span>

      <div className="flex items-center gap-2">

        <span className="text-slate-400">{filme.house}</span>

      </div>

      <a href="#" className="bg-pink-600 w-full text-center rounded py-1 hover:bg-pink-500">detalhes</a>

    </div>


    )

}