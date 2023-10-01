import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GridImgCard(intone:number,strtwo:string,strthree:string,strfour:string) {
  return (
    <Row key={intone} xs={1} md={4} className="g-4">
      {Array.from({ length: 2 }).map((_, idx) => (
        <Col key={idx}>
          <Card key={intone}>
            <Card.Img variant="top" src={strfour} />
            <Card.Body>
              <Card.Title>{strtwo}</Card.Title>
              <Card.Text>
                {strthree}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default GridImgCard;