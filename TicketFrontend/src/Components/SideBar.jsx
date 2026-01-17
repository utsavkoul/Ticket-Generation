import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';

function SideBar({ show, onHide }) {
  const navigate = useNavigate();

  const HandleAllTickets = () => {
    navigate('/dashboard/alltickets');
    onHide();
  }
  const HandleTicketGeneration = () => {
    navigate('/dashboard/generateticket');
    onHide();
  }
  const HandleYourTickets = () => {
    navigate('/dashboard/yourtickets');
    onHide();
  }

  return (
    <Offcanvas show={show} onHide={onHide}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ListGroup variant="flush">
          <ListGroup.Item><Button variant="link" onClick={HandleAllTickets}>All Tickets</Button></ListGroup.Item>
          <ListGroup.Item><Button variant="link" onClick={HandleTicketGeneration}>Generate Ticket</Button></ListGroup.Item>
          <ListGroup.Item><Button variant="link" onClick={HandleYourTickets}>Your Tickets</Button></ListGroup.Item>
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default SideBar;
