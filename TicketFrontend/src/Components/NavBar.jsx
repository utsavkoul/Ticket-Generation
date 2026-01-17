import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import SideBar from './SideBar';

function NavBar(props) {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShow = () => setShowSidebar(true);
  const handleClose = () => setShowSidebar(false);

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container className="justify-content-between gap-3">
          <Button variant="outline-secondary" onClick={handleShow}>
            ☰
          </Button>
          <Navbar.Brand href="#home">Ticket Generation</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">{props.userName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SideBar show={showSidebar} onHide={handleClose} />
    </>
  );
}

export default NavBar;
