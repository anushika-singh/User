import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">MERN PROJECT</Navbar.Brand>
            </Container>
        </Navbar> 
    )
};

export default Header;