import Nav from 'react-bootstrap/Nav';

function NavTab() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="">INPROGRESS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">COMPLETED</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="" >
          PENDING
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavTab;