import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"
import { Routes, Route } from 'react-router-dom';
import { Container, Col, Row } from 'reactstrap';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
    return (
        <Container>
            <Header />
            <Main />
        </Container>
    );
}

export default App
