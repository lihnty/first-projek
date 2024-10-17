import { Card, Button } from "react-bootstrap";
const Cardjurusan = (props) => {
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.jurusan}</Card.Title>
        <Card.Text>
         {props.title}
        </Card.Text>
        <Button variant="primary">Lihat Selengkapnya</Button>
      </Card.Body>
    </Card>



    )
}
export default Cardjurusan;