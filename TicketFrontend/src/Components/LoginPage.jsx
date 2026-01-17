import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Container from 'react-bootstrap/Container';
function LoginPage() {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <Nav variant="tabs" defaultActiveKey="/home" className="mb-3">
        <Nav.Item>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
        </Nav.Item>
      </Nav>

      <Outlet />
    </Container>
  );
}

export default LoginPage;