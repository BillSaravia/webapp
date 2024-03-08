import react from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from "react-bootstrap";

const Listado=()=>{

    return(
        <>
            <h1>Pokemon BillCode</h1>

            <div className="content-wrapper">
                <div className="content">
                    <div className="row gap-3">

                        <Card className="mx-auto" style={{ width: '18rem' }}>
                        <Card.Header>Tipo: Tierra</Card.Header>
                        <Card.Img variant="top" src="https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif" />
                        <Card.Body>
                            <Card.Title className="text-center">Rquagmire</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>HP: ##</ListGroup.Item>
                                <ListGroup.Item>Ataque: ##</ListGroup.Item>
                                <ListGroup.Item>Defensa: ##</ListGroup.Item>
                                <ListGroup.Item>E.Ataque: ##</ListGroup.Item>
                                <ListGroup.Item>E.Defensa: ##</ListGroup.Item>
                                <ListGroup.Item>Velocidad: ##</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        </Card>

                        <Card className="mx-auto" style={{ width: '18rem' }}>
                        <Card.Header>Tipo: Tierra</Card.Header>
                        <Card.Img variant="top" src="https://img.pokemondb.net/sprites/black-white/anim/normal/haunter.gif" />
                        <Card.Body>
                            <Card.Title className="text-center">Rquagmire</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>HP: ##</ListGroup.Item>
                                <ListGroup.Item>Ataque: ##</ListGroup.Item>
                                <ListGroup.Item>Defensa: ##</ListGroup.Item>
                                <ListGroup.Item>E.Ataque: ##</ListGroup.Item>
                                <ListGroup.Item>E.Defensa: ##</ListGroup.Item>
                                <ListGroup.Item>Velocidad: ##</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        </Card>


                        <Card className="mx-auto" style={{ width: '18rem' }}>
                        <Card.Header>Tipo: Tierra</Card.Header>
                        <Card.Img variant="top" src="https://img.pokemondb.net/sprites/black-white/anim/normal/gastly.gif" />
                        <Card.Body>
                            <Card.Title className="text-center">Rquagmire</Card.Title>
                            <ListGroup variant="flush">
                                <ListGroup.Item>HP: ##</ListGroup.Item>
                                <ListGroup.Item>Ataque: ##</ListGroup.Item>
                                <ListGroup.Item>Defensa: ##</ListGroup.Item>
                                <ListGroup.Item>E.Ataque: ##</ListGroup.Item>
                                <ListGroup.Item>E.Defensa: ##</ListGroup.Item>
                                <ListGroup.Item>Velocidad: ##</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        </Card>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Listado;