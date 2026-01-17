import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NavTab from './NabTab';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';



import Modal from 'react-bootstrap/Modal';

// Your Tickets Component
// Fetch tickets specific to logged in user

function YourTickets() {
    const [tickets, setTickets] = useState([]);
    const userId = 1; // Replace with actual user ID as needed
const [status,SetStatus]=useState("ALL");
    const [sort,SetSort]=useState("id");
    const [statusChange,SetStatusChange]=useState();
    const [ChangeId, SetChangeId]=useState();
    const getTickets = async() => {
        
        const response = await axios.get(`http://localhost:8080/tickets/userid/${userId}?sort=${sort}&status=${status}`);
        console.log(response.data);
        setTickets(response.data);
      }

      const handleStatus=(e)=>{
        SetStatus(e.target.name);
        getTickets();
      }
      const handleSort=(e)=>{
        SetSort(e.target.name);
        getTickets();
      }
      const handleTicket= async()=>{
        console.log("Handle Ticket Clicked");
        const response = await axios.post(`http://localhost:8080/ticket/update/${ChangeId}`, {status:statusChange});
        console.log(response.data);
        handleClose();
      }
        const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    SetChangeId(id);
}
      const handleChangeStatus=(e)=>{
        console.log(e.target.name);
        SetStatusChange(e.target.name);
      }
        useEffect(() => {
            getTickets();
        }, []); 

  return (
    <>
    <Container>
      <Row className="mb-3">
        <Col>
          <Nav variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link name="INPROGRESS" onClick={(e)=>handleStatus(e)}>INPROGRESS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link name="COMPLETED" onClick={(e)=>handleStatus(e)}>COMPLETED</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link name="PENDING" onClick={(e)=>handleStatus(e)}>PENDING</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col xs="auto">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Sort By
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item name="id" onClick={(e)=>handleSort(e)}>ID</Dropdown.Item>
              <Dropdown.Item name="assignedTime" onClick={(e)=>handleSort(e)}>Assigned Time</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        {tickets.map((ticket, index)=>(
          <Col md={6} lg={4} key={index} className="mb-3">
            <Card>
              <Card.Header>{ticket.id}</Card.Header>
              <Card.Body>
                <Card.Title>{ticket.title}</Card.Title>
                <Card.Text>
                  <Row>
                    <Col>
                      {ticket.description}
                      <div className="mt-2">
                        <strong>Assigned Time:</strong> {ticket.assignedTime}<br/>
                        <strong>Resolved Time:</strong> {ticket.resolvedTime}
                      </div>
                    </Col>
                    <Col>
                      <div className="d-flex gap-2 mb-2">
                        <Badge bg={ticket.priority=="HIGH" ? "danger" : ticket.priority=="MEDIUM" ? "warning" : ticket.priority=="LOW" ? "primary" : ticket.priority=="URGENT" ? "info" : "secondary"}>{ticket.priority}</Badge>
                        <Badge bg={ticket.status=="COMPLETED" ? "success" : ticket.status=="INPROGRESS" ? "primary" : "secondary"}>{ticket.status}</Badge>
                      </div>
                      <div>
                        <strong>Department:</strong> <Badge bg="light" text="dark">{ticket.department}</Badge><br/>
                        <strong>Assigned User:</strong> <Badge bg="light" text="dark">{ticket.assignedUsername}</Badge>
                      </div>
                    </Col>
                  </Row>
                </Card.Text>
                <Button variant="primary" onClick={() => handleShow(ticket.id)}>
                  Handle Ticket
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Handle Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Change Status
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item name="INPROGRESS" onClick={(e)=>handleChangeStatus(e)}>INPROGRESS</Dropdown.Item>
              <Dropdown.Item name="COMPLETED" onClick={(e)=>handleChangeStatus(e)}>COMPLETED</Dropdown.Item>
              <Dropdown.Item name="PENDING" onClick={(e)=>handleChangeStatus(e)}>PENDING</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleTicket}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>

    </>
  );
}

export default YourTickets;