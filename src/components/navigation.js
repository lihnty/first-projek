import { Navbar, Container, Nav, NavDropdown, Form, Button } from 'react-bootstrap'

const Navigation = () => {
    return (
        <Navbar expand="lg" variant="dark" bg="dark" variantclassName="bg-body-tertiary">
        <Container>
                <Navbar.Brand href="#">Pondok Informatika</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
             >
             <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Abaut</Nav.Link>
                <NavDropdown title="Menu" id="navbarScrollingDropdown">
                 <NavDropdown.Item href="#action3">Calon santri</NavDropdown.Item>
                <NavDropdown.Item href="#">
                  Pendaftaran 2024
                 </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Daftar Calon Santri
                 </NavDropdown.Item>
             </NavDropdown>
               <Nav.Link href="#" disabled>
                Lainnya
                   </Nav.Link>
            </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default Navigation;

