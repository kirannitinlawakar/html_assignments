import './App.css';
import {ToastContainer,toast} from 'react-toastify';
import {Button, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Menus from './components/Menus';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Allcour from './components/Allcour';
import AddCour from './components/AddCour';
import About from './components/About';
import Contact from './components/Contact';

function App() {
   return (
    <div>  
      <Router>
      <Container>  
        <Header />
        <Row>  
          <Col md={4}> <Menus /> </Col>  
          <Col md={8}>
            <Routes>
              <Route path='/' Component={Home} exact />
              <Route path='/add-course' Component={AddCour} exact />
              <Route path='/view-courses' Component={Allcour} exact />
              <Route path='/about-us' Component={About} exact />
              <Route path='/contact-us' Component={Contact} exact />
            </Routes>


          
          </Col>  
        </Row>   
      </Container> 
      </Router> 
    </div>
  
  );
}

export default App;
