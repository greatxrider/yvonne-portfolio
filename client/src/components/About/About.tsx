import './About.module.css';
import { Container, Col, Row, Button } from 'reactstrap';

const About = () => {
    return (
        <Container>
            <Row>
                <Col md='12' lg='6'>
                    <h6>ABOUT ME</h6>
                    <h1>You can't use up creativity. The more you use, the more you have in your significant mind.</h1>
                    <p>
                        Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward),
                        it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back.
                        You have seen Italian organ-boys.
                    </p>
                    <Button>DOWNLOAD RESUME</Button>
                </Col>
                <Col md='12' lg='6'>
                    <h1>Any type of question & Discussion.</h1>
                    <p>
                        Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat
                    </p>
                    <h6><span>WilliamAndersons@william.std</span></h6>
                </Col>
            </Row>
        </Container>
    )
}

export default About;
