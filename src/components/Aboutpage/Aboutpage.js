import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
// import Github from './github';
// import Techstack from './Techstack';


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>
                        As a fresher MERN stack developer, I am committed to using my technical skills to create high-quality and visually appealing web applications. My proficiency in React.js, Node.js, Express.js, and MongoDB, combined with my keen eye for design, allow me to create websites that are both functional and aesthetically pleasing.                         </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>ExpressJS</li>
                                    <li>MongoDB</li>
                                    <li>NodeJS</li>
                                    
                                </Col>
                                <Col md={5}>
                                    <li>React Js</li>
                                    <li>Redux Js</li>
                                    <li>React-Bootsrap</li>
                                    <li>Chakra UI</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
                        {/* <Github/>
                         */}
                         {/* <Techstack/> */}
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage