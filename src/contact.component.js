import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { submitContact } from "./firebase.utils";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactComment: ""
    };
  }

  handleChange = e => {
    // console.log(e);
    // console.log(e.target.name);
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    // alert('A name was submitted: ' + this.state.value);

    submitContact(this.state);
    console.log(this.state);
    //Send Data to Firebase
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h2>Contact Us</h2>
        <div>
          <Container>
            <Row>
              <Col>Map</Col>
              <Col>
                Contact Form
                <div>
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="ContactFormNAME">
                      <Form.Control
                        name="contactName"
                        type="text"
                        value={this.state.contactName}
                        onChange={this.handleChange}
                        placeholder="Name"
                      />
                    </Form.Group>
                    <Form.Group controlId="ContactFormEMAIL">
                      <Form.Control
                        name="contactEmail"
                        type="email"
                        value={this.state.contactEmail}
                        onChange={this.handleChange}
                        placeholder="Email"
                      />
                    </Form.Group>
                    <Form.Group controlId="ContactFormSUBJECT">
                      <Form.Control
                        name="contactSubject"
                        type="text"
                        value={this.state.contactSubject}
                        placeholder="Subject"
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="ContactFormCOMMENT">
                      <Form.Control
                        name="contactComment"
                        value={this.state.contactComment}
                        onChange={this.handleChange}
                        as="textarea"
                        rows="3"
                        placeholder="Comment"
                      />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
            <br />
          </Container>
        </div>
      </div>
    );
  }
}

export default Contact;
