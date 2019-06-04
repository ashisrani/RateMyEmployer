import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
    render() {
        return (
        <Footer color="white" className="font-small pt-4 mt-4">
            <Container fluid className="text-center text-md-left">
                <Row>
                    <Col md="6">
                        <h5 color="black" className="title">Posted By:</h5>
                        <p>Trisha Asar, Chai Gangavarapu, Nikhil Goel, Ash Israni</p>
                       
                    </Col>
                    <Col md="6">
                        <h5 className="title">Contact Information:</h5>
                        <p><a style={{ color: 'black' }} href="mailto:chaitanya.gangavarapu@gmail.com">chaitanya.gangavarapu@gmail.com</a></p>
                    </Col>
                </Row>
            </Container>
        </Footer>
        );
    }
}

export default FooterPage;