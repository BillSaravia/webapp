import { Pokemon } from '../models/pokemon.m';

export async function getPokemons(): Promise<Pokemon[]>{
    
    /* TODO: Llamado a la API REST*/


    const response = await fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json");

    const datos = await response.json();
    const pokemons = datos.results.map((pokemon:any) => ({
        name: pokemon.name,
        id: pokemon.national_number,
        imggif: pokemon.sprites['animated'],
        imgnormal: pokemon.sprites['normal'],
        imglarge: pokemon.sprites['large'],
        total: pokemon.total,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        sp_atk: pokemon.sp_atk,
        sp_def: pokemon.sp_def,
        speed: pokemon.speed,
        type: pokemon.type [0],
    
    }));

    return pokemons;
}
    
