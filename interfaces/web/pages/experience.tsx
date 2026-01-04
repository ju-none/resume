import Separator from "@front/components/headers/Separator";
import { H1 } from "@front/styles/components/titles";
import { useLanguage } from "@pkg/contexts/LanguageContext";
import "@styles/components/timeline.scss"
import "@styles/pages/experience.scss"
import { Container } from "reactstrap";

export default function Experience() {
    const { t } = useLanguage();
    return (
        <section id="experience">
            <Separator title='Experience' />
            <Container fluid className="wrap">
                <Container fluid className="block">
                    <H1>Engagement Étudiant</H1>
                    <ul className="timeline">
                        <li>
                            <div className="direction-r">
                                <div className="flag-wrapper">
                                    <span className="time-wrapper"><span className="time">2018 - 2024</span></span>
                                    <div className="flag">
                                        Cercle Informatique de l'ULB
                                        <img src="/img/CI.png" />
                                    </div>
                                </div>
                                <div className="desc" style={{fontSize: '18px'}}>{t('formation.ulb')}</div>
                            </div>
                        </li>
                    
                        <li>
                            <div className="direction-l">
                                <div className="flag-wrapper">
                                    <span className="time-wrapper"><span className="time">2023 - 2024</span></span>
                                    <div className="flag">
                                        Association des Cercles Étudiants de l'ULB
                                        <img src="/img/ACE.png" />
                                    </div>
                                </div>
                                <div className="desc" style={{fontSize: '18px'}}>{t('formation.19')}</div>
                            </div>
                        </li>
                    </ul>
                </Container>
                <Container fluid className="block">
                    <H1>Jobs</H1>
                    <ul className="timeline">
                        <li>
                            <div className="direction-r">
                                <div className="flag-wrapper">
                                    <span className="time-wrapper"><span className="time">2022 - 2023</span></span>
                                    <div className="flag">
                                        Royal Sporting Club Anderlecht
                                        <img src="/img/rsca.png" />
                                    </div>
                                </div>
                                <div className="desc" style={{fontSize: '18px'}}>{t('formation.ulb')}</div>
                            </div>
                        </li>
                    
                        <li>
                            <div className="direction-l">
                                <div className="flag-wrapper">
                                    <span className="time-wrapper"><span className="time">2023 - 2024</span></span>
                                    <div className="flag">
                                        Royale Union Saint-Gilloise 
                                        <img src="/img/rusg.png" />
                                    </div>
                                </div>
                                <div className="desc" style={{fontSize: '18px'}}>{t('formation.19')}</div>
                            </div>
                        </li>
                    </ul>
                </Container>
            </Container>
        </section>
    )
}