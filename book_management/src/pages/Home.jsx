import React from 'react'
import Header from '../components/Header'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Add from '../components/Add';

function Home() {
    return (
        <>
            <Header />

            <Container className='mt-5 ms-3'>
                <Row>
                    <Col xs={9}><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://gleegmjournal.com/wp-content/uploads/2021/04/rich-dad-poor-dad-cover.jpg" />
                        <Card.Body>
                            <Card.Title>Book Name</Card.Title>
                            <Card.Text>
                                Book description
                            </Card.Text>
                            <Button variant="primary">Edit</Button>
                            <Button variant="primary" className='ms-2'>View</Button>
                        </Card.Body>
                    </Card>
                    </Col>


                    <Col>
                        <Add/>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Home
