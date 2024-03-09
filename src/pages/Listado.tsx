import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup, Figure } from "react-bootstrap";
import { getPokemons } from "../controller/getpokemon";
import { Pokemon } from '../models/pokemon.m';

const Listado=()=>{

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [query, setQuery] = useState("");


    useEffect(()=>{
        const ObtenerTodos = async() =>{
            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
        }
        ObtenerTodos();
    });

    const filtrarPokemon = pokemons?.slice(0,400).filter((pokemon)=>{
        return pokemon.name.toLowerCase().match(query.toLowerCase());
    })

    return(
        <>
            <h1>Pokemon BillCode</h1>

            <header>
                <input
                    value={query}
                    placeholder="Buscar Pokemon"
                    onChange={(event) => setQuery(event.target.value.trim())}
                    type="text"
                />
            </header>

            <div className="content-wrapper">
                <div className="content">
                    <div className="row gap-3">

                        {filtrarPokemon?.slice(0,400).map((pokemon)=>(

                            <Card className="mx-auto" style={{ width: '18rem' }}>
                            <Card.Header><b> Tipo: </b> {pokemon.type} </Card.Header>
                            <Card.Img width={80} height={100} className="d-block mx-auto w-50" variant="top" src={pokemon.imggif} />
                            <Card.Body>
                                <Card.Title className="text-center"> <b> {pokemon.id} - {pokemon.name} </b> </Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Figure.Image
                                        width={16}
                                        height={16}
                                        src="https://cdn-icons-png.flaticon.com/128/833/833472.png"
                                        /><b> HP :</b> {pokemon.hp}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Figure.Image
                                        width={16}
                                        height={16}
                                        src="https://cdn-icons-png.flaticon.com/512/3522/3522092.png"
                                        /><b> Ataque: </b>{pokemon.attack}
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Figure.Image
                                        width={16}
                                        height={16}
                                        src="https://cdn-icons-png.flaticon.com/512/929/929429.png"
                                        /><b> Defensa: </b>{pokemon.defense}
                                    </ListGroup.Item>  
                                    <ListGroup.Item>
                                        <Figure.Image
                                        width={16}
                                        height={16}
                                        src="https://cdn-icons-png.flaticon.com/512/1671/1671062.png"
                                        /><b> E.Ataque: </b>{pokemon.sp_atk}
                                    </ListGroup.Item>                                      
                                    <ListGroup.Item>
                                        <Figure.Image
                                        width={16}
                                        height={16}
                                        src="https://cdn-icons-png.flaticon.com/512/1671/1671062.png"
                                        /><b> E.Defensa: </b>{pokemon.sp_def}
                                    </ListGroup.Item>  
                                    <ListGroup.Item>
                                        <Figure.Image
                                        width={16}
                                        height={16}
                                        src="https://cdn-icons-png.flaticon.com/512/8853/8853763.png"
                                        /><b> Velocidad: </b>{pokemon.speed}
                                    </ListGroup.Item>  
                                </ListGroup>
                            </Card.Body>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )

}

export default Listado;