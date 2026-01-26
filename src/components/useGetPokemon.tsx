import { useEffect, useState } from "react";

 interface PokemonDataType {
    name: string;
    id: number;
    height: number;
    weight: number;
    sprites: { front_default: string };
    types: {
      [key: number]: { type: { name: string } };
    };
 }

const useGetPokemon = ({id} : {id:number}) => {
   const [ pokemon, setPokemon] = useState<PokemonDataType| null>(null)
   const [ loading, setLoading] = useState<boolean>(false)
   const [ error, setError] = useState<boolean | null>(null)

    useEffect(()=> {
       const apiCall = async (id: number) => {
        await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((apiData) => {
            setPokemon(apiData);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
            console.error("Error:", error);
          });
      }
      apiCall(id)
    }, [])

    return {
        pokemon, 
        loading, 
        error
    }
}

export {
    useGetPokemon
}

export type {
    PokemonDataType
}
