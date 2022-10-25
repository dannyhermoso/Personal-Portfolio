import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Container, Col, Row } from 'react-bootstrap';
import colorSharp from '../assets/img/color-sharp.png'
import NodeJS from '../assets/img/NodeJS.png'
import NextJS from '../assets/img/NextJS.png'
import Mongo from '../assets/img/Mongo.svg'
import Typescript from '../assets/img/Typescript.png'
import Express from '../assets/img/Express.png'

import reactLogo from '../assets/img/React-icon.svg.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


      return(
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p>Here you can see some of my skills as a programmer</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={NodeJS} alt='NodeJS'/>
                                    <h5>NodeJS</h5>
                                </div>
                                <div className='item'>
                                    <img src={NextJS} alt='NextJS'/>
                                    <h5>Next Js</h5>
                                </div>
                                <div className='item'>
                                    <img src={reactLogo} alt='reactLogo'/>
                                    <h5>React</h5>
                                </div>
                                <div className='item'>
                                    <img src={Mongo} alt='Mongo' width='600px'/>
                                    <h5>Mongo</h5>
                                </div>
                                <div className='item'>
                                    <img src={Typescript} alt='Typescript'/>
                                    <h5>Typescript</h5>
                                </div>
                                <div className='item'>
                                    <img src={Express} alt='Express'/>
                                    <h5>Express</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} className='background-image-left' alt='whatever bro'/>
        </section>
      )
}