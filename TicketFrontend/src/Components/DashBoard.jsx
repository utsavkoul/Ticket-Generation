import react from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import ListofTickets from './ListofTickets';
import TicketPage from './TicketPage';
import YourTickets from './YourTickets';
const DashBoard = () => {
    const userName = "UserName";
    return (
        <>
        <NavBar userName={userName} />
        <Outlet/>
        </>
    );
}
export default DashBoard;