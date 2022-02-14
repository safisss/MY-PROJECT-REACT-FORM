import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
const App = () => {
    return (
        <>
        <div>
            <Container>
             
                <h1 className="shadow-sm text-success mt-4 p-4 text-center rounded">Please sign in</h1>
                
                <Row className="mt-4"> 
                    <Col lg={5} md={6} sm={12} className="p-4 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your password" />
                            </Form.Group>

                            <Button variant="success btn-block" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 Sellami Safa. All Rights Reserved.</h6>
                
            </Container>
            </div>

        </>
    );
    };

export default App;
