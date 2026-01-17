import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navtab from './NabTab';
    import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
// List of Tickets Component
// Sort and Filter using Priority, Department, Date Created, status (Open/Closed)
function ListofTickets(props) {
  const [tickets, setTickets] = useState([{
    "id:":"1",
    "title":"Sample Ticket",
    "description":"This is a sample ticket description",
    "assignedTime":"2024-06-10",
    "resolvedTime":"2024-06-12",
    "priority":"HIGH",
    "department":"IT",
    "status":"OPEN",
    "assignedUsername":"User1"
  }]);
  const userName = "UserName";
  const [sort,SetSortType]=useState("id");
  const [status,SetStatusType]=useState("ALL");
  const getTickets = async() => {
    const response = await axios.get(`http://localhost:8080/tickets?sort=${sort}&status=${status}`);
    console.log(response.data);
    setTickets(response.data);
  }
  const handleSort= (e)=>{
    SetSortType(e.target.name);
    getTickets();
  }
  const handleStatus= (e)=>{
    SetStatusType(e.target.name);
    getTickets();
  }
  useEffect(() => {
    getTickets();
  }, []);

  return (
    <>
     <Nav variant="tabs" defaultActiveKey="/home">
     <Nav.Item>
        
        <Nav.Link name="ALL" onClick={(e)=>handleStatus(e)}>ALL</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        
        <Nav.Link name="INPROGRESS" onClick={(e)=>handleStatus(e)}>INPROGRESS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link name="COMPLETED"onClick={(e)=>handleStatus(e)}>COMPLETED</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link name="PENDING"  onClick={(e)=>handleStatus(e)}>
          PENDING
        </Nav.Link>
        </Nav.Item>
         <Nav.Item>
        <Nav.Link className="">
       
        </Nav.Link>
      </Nav.Item>
    </Nav>

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Sort By
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item name="id" onClick={(e)=>handleSort(e)}>ID</Dropdown.Item>
        <Dropdown.Item name="assignedTime" onClick={(e)=>handleSort(e)}>Assigned Time</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>

    
    {tickets.map((ticket, index)=>(
    <Card key={index} className="gap-3 mb-3">
      <Card.Header>{ticket.id}</Card.Header>
      <Card.Body>
        <Card.Title>{ticket.title}</Card.Title>
        <Card.Text >
          <Row>
            <Col>
          {ticket.description}
          <div className="gap-3 d-flex justify-content-between">
           
            Assigned Time :  
          {ticket.assignedTime}
          <br/>
          Resolved time :
          {ticket.resolvedTime}
         
          </div>
          </Col>
          <Col>
          <div className="d-flex gap-2 justify-content-right right-align right-0">
        
      <Badge bg={ticket.priority=="HIGH" ? "danger" : ticket.priority=="MEDIUM" ? "warning" :ticket.priority=="LOW"?"primary":ticket.priority=="URGENT"?"info":"secondary" }>{ticket.priority}</Badge>
   
          
           
       <Badge bg={ticket.status=="COMPLETED"?"success":ticket.status=="INPROGRESS"?"primary":"secondary"}>{ticket.status}</Badge>
      

      </div>
      
          Department :
          <Badge bg="light" text="dark">
          {ticket.department}
          </Badge>
          <br/>
          Assigned User :
          <Badge bg="light" text="dark">
          {ticket.assignedUsername}
          </Badge>
          </Col>
          </Row>
        </Card.Text>
        
      </Card.Body>
    </Card>
  ))}
  
  
    </>
  );
}

export default ListofTickets;
