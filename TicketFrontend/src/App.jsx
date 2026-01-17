import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TicketPage from './Components/TicketPage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar'
import SideBar from './Components/SideBar'
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListofTickets from './Components/ListofTickets'
import YourTickets from './Components/YourTickets'
import LoginPage from './Components/LoginPage'
import DashBoard from './Components/DashBoard'
function App() {
  const [tickets, setTickets] = useState([{
    "id:":1,
    "title":"Sample Ticket",
    "description":"This is a sample ticket description",
    "assignedTime":"2024-06-10",
    "priority":"HIGH",
    "department":"IT",
    "status":"OPEN"
  }]);
  const userName = "UserName";
  
  const getTickets = async() => {
    const response = await axios.get('http://localhost:8080/tickets');
    console.log(response.data);
    setTickets(response.data);
  }
  useEffect(() => {
    getTickets();
  }, []);


  return (
    <div className="app-layout d-flex">
      <DashBoard />
      
      
    </div>
  )
}

export default App
