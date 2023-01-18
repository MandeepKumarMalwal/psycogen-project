import Items from "./items";
import image1 from "../../public/year.jpg";
import image2 from "../../public/produts.jpg";
import image3 from "../../public/customer.jpg";
import image4 from "../../public/staff.jpg";

import { Row,Col } from "./Styled/records.styled";

export default function Records() {
  return (
   <Row>
     <Col>
        <Items image={image1} title="20" desc="YEARS EXPERIENCE" />
        </Col>
      <Col>
        <Items image={image2} title="200" desc="PRODUCTS WE OFFER" />
        </Col>
      <Col>
        <Items image={image3} title="625" desc="PARTNERS ASSOCIATED" />
        </Col>
      <Col>
        <Items image={image4} title="5" desc="DIVISIONS" />
        </Col>
      </Row>
  );
}
