import './Main.module.css';
import { Container, Col, Row } from 'reactstrap';

const Main = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <div className="oval-container">
                        <img
                            src="https://via.placeholder.com/150" // Replace with your image URL
                            alt="Oval"
                            className="oval-image"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Main;
