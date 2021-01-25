import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Home from './components/Home';
import Member from "./components/Member";

function App() {
  return (
    <Router>
      <Container className="py-md-5">
        <Row>
          <Col>
            <Switch>
              <Route path="/members/:id">
                <Member/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
