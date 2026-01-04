import { Col, Container, Row } from "reactstrap";
import "@styles/pages/profile.scss";
import { useLanguage } from "@pkg/contexts/LanguageContext";
import { Github, LinkedIn, Mail } from "@front/components/utils/icons";

export default function Profile() {
    const { t } = useLanguage();
    return (
        <section id="profile">
            <Container fluid className="card-line">
                <Row>
                    <Col lg="4" md="12">
                        <div className="card-image">
                            <img src='/img/profile_picture.png' alt="Profile Picture"/>
                        </div>
                    </Col>
                    <Col lg="8" md="12">
                        <div className="card-text">
                            <h1>Julien Leclercq</h1>
                            <h4>{t('profile.formation')}</h4>
                            <p><em>{t('profile.description')}</em></p>
                            <h6><em>@none</em></h6>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="social">
                <ul className="list">
                    <a href="https://github.com/ju-none" target="_blank">
                        <li>
                            <Github size={'100'} />
                        </li>
                        <li>
                            <h1>@ju-none</h1>
                        </li>
                    </a>
                    <span></span>
                    <a href="https://linkedin.com/ju-none" target="_blank">
                        <li>
                            <LinkedIn size={'100'} />
                        </li>
                        <li>
                            <h1>@ju-none</h1>
                        </li>
                    </a>
                    <span></span>
                    <a href="mailto:julien@leclercq.icu" target="_blank">
                    <li>
                        <Mail size={'100'} />
                    </li>
                    <li>
                        <h1>julien@leclercq.icu</h1>
                    </li>
                    </a>
                </ul>
            </Container>
        </section>
    )
}