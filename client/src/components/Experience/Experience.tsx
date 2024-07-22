import './Experience.module.css';
import { Container, Col, Row } from 'reactstrap';

const Experience = () => {
    return (
        <Container>
            <div>
                <h1>Trusted with a variety of more <span>experiences</span></h1>
            </div>
            <div>
                <Row>
                    <Col>
                        <h3>100+</h3>
                        <p>Happy Client</p>
                    </Col>
                    <Col>
                        <h3>150+</h3>
                        <p>Fashion design</p>
                    </Col>
                    <Col>
                        <h3>5+</h3>
                        <p>Years of experience</p>
                    </Col>
                    <Col>
                        <h3>19</h3>
                        <p>Fashion Award</p>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Experience;
