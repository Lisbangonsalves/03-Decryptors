import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./form.css";
import Profile from '../assets/profile.png'

function BasicExample() {
  return (
    <>
    <div className="container">
    <div className="subnav flexit distance-between">
        <h2>Create Lead</h2>
        <div className="buttons">

        <Button variant="primary" size="sm">
          save
        </Button>{' '}
        <Button variant="secondary" size="sm">
          cancel
        </Button>
        </div>
        
    </div>
    <div className="imageupload">
        <h5>Lead Image</h5>
        <a href="/"><img src={Profile} alt="" srcset="" /></a>
        

    </div>
    <h5>Lead Information</h5>
      <div className="flexit">
        <div className="container ">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="container">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>

    </div>
    
    </>
  );
}

export default BasicExample;
