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
                        <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22322%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20322%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18e1c80762d%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18e1c80762d%22%3E%3Crect%20width%3D%22322%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22120.08832168579102%22%20y%3D%2297.00003795623779%22%3E322x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
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
                        <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22322%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20322%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18e1c80762d%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18e1c80762d%22%3E%3Crect%20width%3D%22322%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22120.08832168579102%22%20y%3D%2297.00003795623779%22%3E322x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
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