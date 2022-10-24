import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCards } from "./ProjectCards";
import colorSharp2 from '../assets/img/color-sharp2.png'
import foodify1 from '../assets/img/foodify1.PNG'
import foodify2 from '../assets/img/foodify2.PNG'
import foodify3 from '../assets/img/foodify3.PNG'
import foodify4 from '../assets/img/foodify4.PNG'
import foodify5 from '../assets/img/foodify5.PNG'
import foodify6 from '../assets/img/foodify6.PNG'
import book1 from '../assets/img/book1.PNG'
import book2 from '../assets/img/book2.PNG'
import book3 from '../assets/img/book3.PNG'
import book4 from '../assets/img/book4.PNG'
import book5 from '../assets/img/book5.PNG'
import book6 from '../assets/img/book6.PNG'
import game1 from '../assets/img/game1.PNG'
import game2 from '../assets/img/game2.PNG'
import game3 from '../assets/img/game3.PNG'
import game4 from '../assets/img/game4.PNG'
import game5 from '../assets/img/game5.PNG'
import game6 from '../assets/img/game6.PNG'
import game7 from '../assets/img/game7.PNG'
import game8 from '../assets/img/game8.PNG'


export const Projects = () => {
    const projects = [
        {
            title: "Login and register",
            description: "Here is the option to login with your email or your google acount",
            imgUrl: foodify1,
        },
        {
            title: "Stores",
            description: "Here is different options of restaurant to choose",
            imgUrl: foodify2,
        },
        {
            title: "Restaurant",
            description: "You can add different foods to the shopping cart and also give reviews about the restaurant",
            imgUrl: foodify3,
        },
        {
            title: "Payment method",
            description: "You can pay your orders using Stripe",
            imgUrl: foodify4,
        },
        {
            title: "User profile",
            description: "There you can see all your orders, change your username, password...",
            imgUrl: foodify5,
        },
        {
            title: "Business page",
            description: "Exclusive view for restaurant owners and manage them",
            imgUrl: foodify6,
        },
    ];


    const projects2 = [
        {
            title: "Home",
            description: "Here you can see all the books of the store",
            imgUrl: book1,
        },
        {
            title: "Stores",
            description: "Modal detail of each book where you can add it to your shopping cart or your wish list",
            imgUrl: book2,
        },
        {
            title: "Shopping cart",
            description: "You can see all the books that you have in your shopping cart, and if you are logged you can proceed to pay in Stripe",
            imgUrl: book3,
        },
        {
            title: "Admin dashboard",
            description: "Dashboard only for admins to see a summary of all the books, users, orders and also see charts of all the store",
            imgUrl: book4,
        },
        {
            title: "Elements admin",
            description: "The admin has special permissions like ban users, dispatch oders, delete books...",
            imgUrl: book5,
        },
        {
            title: "User Profile",
            description: "There you can see all the data of your personal profile and modify them",
            imgUrl: book6,
        },
    ];


    const projects3 = [
        {
            title: "Home",
            description: "Here you can see all the games of the store",
            imgUrl: game1,
        },
        {
            title: "Home",
            description: "All the games and different filters, also the pagination",
            imgUrl: game2,
        },
        {
            title: "Shopping cart",
            description: "You can see all the games that you have in your shopping cart, and if you are logged you can proceed to pay in mercadopago",
            imgUrl: game3,
        },
        {
            title: "Login",
            description: "Login and register of the user",
            imgUrl: game4,
        },
        {
            title: "Animation full screen",
            description: "Links for differents pages of the app",
            imgUrl: game6,
        },
        {
            title: "Detail game",
            description: "You can see the detail of each game, and give a review of them",
            imgUrl: game7,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Here are some images of and links of my main applications</p>
                        <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                        <Nav variant="pills" className='nv-pills mb-5 justify-content-center align-items' id='pills-tab'>
                            <Nav.Item>
                                <Nav.Link eventKey="first">Foodify deliveries app</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Books ecommerce</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                    Games ecommerce
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
                            <h5><h4>Deliveries app</h4> App Style marketplaece where you can register as an user to buy foods or you can ask about start your own restaurant and manage it</h5>
                            <a href="https://foodifys.vercel.app/"><h5><h4>Link to deploy</h4></h5></a>
                                <Row>
                                    {projects.map((project, index) => {
                                        return(
                                            <ProjectCards 
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                            <h5><h4>Books app</h4>App of an ecommerce about books</h5>
                            <a href="https://ecommerce-lac-nu.vercel.app/"><h5><h4>Link to deploy</h4></h5></a>

                            <Row>
                                    {projects2.map((project, index) => {
                                        return(
                                            <ProjectCards 
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='third'>
                            <h5><h4>Games app</h4>App of an ecommerce about games that also have a social network between users</h5>
                            <a href="https://pfhenry.vercel.app/"><h5><h4>Link to deploy (deploy is still in development)</h4></h5></a>
                            

                            <Row>
                                    {projects3.map((project, index) => {
                                        return(
                                            <ProjectCards 
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })}
                                </Row>
                            </Tab.Pane>

                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    )
}