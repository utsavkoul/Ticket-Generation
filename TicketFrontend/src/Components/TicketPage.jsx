import react, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
const TicketPage = () => {


  const [addTicket, setAddTicket] = useState({
    title: "",
    description: "",
    
    priority: "",
    city: "",
    resolvedTime:""
  })

  const handleChange = (e) => {
    setAddTicket({...addTicket, [e.target.name]: e.target.value})
    console.log(addTicket);
  }
  const hanleDisplay = (e) => {
    console.log(e.target.text);
  }
  const handleDropdownChange = (e) => {
    setAddTicket({...addTicket, ["priority"]: e.target.text})
  }
  const handleSubmit = async() => {
    const response = await axios.post('http://localhost:8080/createticket', addTicket);
    console.log(response.data);
  }
    return (
      <>

       
    {/* <div>Ticket Page</div>
    <input type="text" placeholder="Add Title" />
    <input type="text" placeholder="Add Description" />
    <input type="text" placeholder="Assigned Time" />
    <input type="text" placeholder="Priority" />
    <input type="text" placeholder="Department" />
    <button>Add Ticket</button> */}

<div className="align-items-left ">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
        <Form.Control
          placeholder="Title"
          aria-label="title"
          aria-describedby="basic-addon1"
          name="title"
          onChange={handleChange}
        />
      </InputGroup>
      
      

      

      <InputGroup className="mb-3">
        <InputGroup.Text>Description</InputGroup.Text>
        <Form.Control as="textarea" aria-label="Description" name="discription" onChange={handleChange} />
      </InputGroup>

    <Dropdown className="mb-3">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
       Priority
      </Dropdown.Toggle>

      <Dropdown.Menu name="priority" onChange={hanleDisplay}>
        <Dropdown.Item name="priority" value="LOW" onClick={(value)=>handleDropdownChange(value)}>LOW</Dropdown.Item>
        <Dropdown.Item name="priority" value="MEDIUM" onClick={(value)=>handleDropdownChange(value)}>MEDIUM</Dropdown.Item>
        <Dropdown.Item name="priority" value="HIGH" onClick={(value)=>handleDropdownChange(value)}>HIGH</Dropdown.Item>
        <Dropdown.Item name="priority" value="URGENT" onClick={(value)=>handleDropdownChange(value)}>URGENT</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Resolved Till</InputGroup.Text>
        <Form.Control
          placeholder="Resolved Till"
          aria-label="Resolved Till"
          aria-describedby="basic-addon1"
          name="resolvedTime"
          onChange={handleChange}
        />
      </InputGroup >

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">City</InputGroup.Text>
        <Form.Control
          placeholder="city"
          aria-label="city"
          aria-describedby="basic-addon1"
          name="city"
          onChange={handleChange}
        />
      </InputGroup >
      <Button variant="primary" onClick={handleSubmit}>Add Ticket</Button>
      </div>
    </>
);
}
export default TicketPage;