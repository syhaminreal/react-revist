
import { Col, Row, Form, Button } from 'react-bootstrap'


export const Login = () => {
  return <Col xl={4} className="bg-white my- py-3 rounded-2 shadow-sm mx-auto">
      <Row>
        <Col className="text-center">
          <h1>Login</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <div className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control type="email" name="email" id="email" required />
            </div>
            <div className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control type="password" name="password" id="password" required />
            </div>
            <div className="mb-3 form-check">
              <Form.Check type="checkbox" label="Remember Me" id="remember" />
            </div>
            <div className="mb-3 d-grid">
              <Button variant="dark" type="submit">
                <i className="fa-solid fa-right-to-bracket me-2"></i>Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Col>
 
}
