import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';

function ImgCard(intone:number,strtwo:string,strthree:string,strfour:string) {
  return (
    <Card key={intone} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={strfour} />
      <Card.Body>
        <Card.Title>{strtwo}</Card.Title>
        <Card.Text>
          {strthree}
        </Card.Text>
        <Button variant="primary">Play</Button>
      </Card.Body>
    </Card>
  );
}

export default ImgCard;