import React, { Component} from 'react';
import Footer from './footer';
import {Container} from 'react-bootstrap';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                <Footer />
                </Container>
            </div>
        )
    }
}

export default LandingPage