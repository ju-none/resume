import "@styles/pages/projects.scss"
import Separator from "@front/components/headers/Separator";
import { Card, CardBody, CardFooter, CardLink, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "reactstrap";
import data from "@/projects/projects.json"

export default function Projects() {
    return (
        <section id="projects">
            <Separator title={'Projects'} />
            <Container className="projects">
                <Row>
                    {Object.values(data.fileMap).map((card) => (
                        <Col>
                            <Card className="card">
                                <div className="img-block">
                                    <img src={`/projects/${card.image}`} />
                                </div>
                                <CardBody>
                                    <CardTitle tag="h5">{card.title}</CardTitle>
                                    <CardSubtitle>{card.subtitle}</CardSubtitle>
                                    <CardText>
                                        
                                    </CardText>
                                    {/* <CardLink>
                                        {card.links.map((link : string) => (
                                            <p>{link}</p>
                                        ))}
                                    </CardLink> */}
                                    <CardFooter>

                                    </CardFooter>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                    
                </Row>
            </Container>
        </section>
    )
}