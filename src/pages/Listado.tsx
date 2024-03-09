import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from "react-bootstrap";
import { getPokemons } from "../controller/getpokemon";
import { Pokemon } from '../models/pokemon.m';

const Listado=()=>{

    const [pokemons, setPokemons] = useState<Pokemon[]>([]);


    useEffect(()=>{
        const ObtenerTodos = async() =>{
            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
        }
        ObtenerTodos();
    });


    return(
        <>
            <h1>Pokemon BillCode</h1>

            <div className="content-wrapper">
                <div className="content">
                    <div className="row gap-3">

                        {pokemons?.slice(0,400).map((pokemon)=>(

                            <Card className="mx-auto" style={{ width: '18rem' }}>
                            <Card.Header><b> Tipo: </b> {pokemon.type} </Card.Header>
                            <Card.Img width={80} height={100} className="d-block mx-auto w-50" variant="top" src={pokemon.imggif} />
                            <Card.Body>
                                <Card.Title className="text-center"> <b> {pokemon.name} </b> </Card.Title>
                                <ListGroup variant="flush">
                                    <ListGroup.Item><b> HP: </b>{pokemon.hp}</ListGroup.Item>
                                    <ListGroup.Item><b> Ataque: </b>{pokemon.attack} </ListGroup.Item>
                                    <ListGroup.Item><b> Defensa: </b>{pokemon.defense} </ListGroup.Item>
                                    <ListGroup.Item><b> E.Ataque: </b>{pokemon.sp_atk} </ListGroup.Item>
                                    <ListGroup.Item><b> E.Defensa: </b>{pokemon.sp_def} </ListGroup.Item>
                                    <ListGroup.Item><b> Velocidad: </b>{pokemon.speed} </ListGroup.Item>
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