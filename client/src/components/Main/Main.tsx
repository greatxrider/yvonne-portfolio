import './Main.module.css';
import { Container, Col, Row, Button } from 'reactstrap';

const Main = () => {
    return (
        <Container>
            <Row>
                <Col sm='12' md='6'>
                    <div className="oval-container">
                        <img
                            src="https://via.placeholder.com/150" // Replace with your image URL
                            alt="Oval"
                            className="oval-image"
                        />
                    </div>
                </Col>
                <Col sm='12' md='6'>
                    <div>
                        <h6>Hello I'M A CERTIFIED PUBLIC ACCOUNTANT</h6>
                        <h1>Yvonne Rico</h1>
                        <p>With over 5 years of experience in Accounting services. I help businesses and individuals,
                            track and manage their finances and compliance with government regulations.
                        </p>
                    </div>
                    <div>
                        <Button>See my Portfolio</Button>
                        <Button>Download Resume</Button>
                    </div>
                </Col>
                <Col>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Main;
