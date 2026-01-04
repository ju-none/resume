import { useLanguage } from "@pkg/contexts/LanguageContext"
import "@styles/components/timeline.scss"
import "@styles/pages/formation.scss"
import { Container } from "reactstrap"

export default function Formation() {
    const { t } = useLanguage();
    return (
        <section className="formation" id="formation">
            <Container fluid className="form-block">
                <ul className="timeline">
                    <li>
                        <div className="direction-r">
                            <div className="flag-wrapper">
                                <span className="time-wrapper"><span className="time">2018 - 2023</span></span>
                                <div className="flag">
                                    Université Libre de Bruxelles
                                    <img src="/img/ulb.jpg" />
                                </div>
                            </div>
                            <div className="desc" style={{fontSize: '18px'}}>{t('formation.ulb')}</div>
                        </div>
                    </li>
                
                    <li>
                        <div className="direction-l">
                            <div className="flag-wrapper">
                                <span className="time-wrapper"><span className="time">2023 - 2025</span></span>
                                <div className="flag">
                                    Campus 19 <em>(École 42)</em>
                                    <img src="/img/campus19.jpeg" />
                                </div>
                            </div>
                            <div className="desc" style={{fontSize: '18px'}}>{t('formation.19')}</div>
                        </div>
                    </li>
                
                </ul>
            </Container>
        </section>
    )
}