import { Navbar, Container } from "react-bootstrap";
const Footer = () => {
    return (
            <Navbar variant="dark" bg="dark"variantclassName="bg-body-tertiary" >
                <Container>
                <Navbar.Brand href="#home">Pondok Informatika</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    Copyright ALL reserved By: <a href="#login" className="text-decoration-none">Ahmad sholeh f </a>
                    </Navbar.Text>
                </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}
export  default Footer;