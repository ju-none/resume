import { H1 } from "@front/styles/components/titles";
import { Col, Row } from "reactstrap";
import "@styles/components/separator.scss"

const Separator = ({ title } : { title: string }) => {
  return (
    <section className="separator">
      <div className="sep h-100 font-light">
        <Row className="align-items-center text-center w-100">
          <Col style={{display:'flex', justifyContent:'flex-end'}}><div className="line w-50 color-light"/></Col>
          <Col><H1 className="w-100">{title}</H1></Col>
          <Col><div className="line w-50 color-light" /></Col>
        </Row>
      </div>
    </section>
  );
};

export default Separator;