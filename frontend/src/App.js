import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


function App() {
  return (
          <div className="text-center">
               <div className="mb-3 mt-5">
               <h1><strong>Silverlight</strong></h1>
                <InputGroup>
                  <Form.Control
                    className="me-5 ms-5 mt-1"
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="URL want to be checked"
                    size="lg"
                  />
                </InputGroup>
               </div>
                <div className="d-grid mb-3 me-5 ms-5">
                   <Button variant="primary" size="lg">
                      Analyse
                   </Button>
                </div>
          </div>
  );
}

export default App;
