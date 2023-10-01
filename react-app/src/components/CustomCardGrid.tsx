/*import Col from 'react-bootstrap/Col';
import {Button} from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function CustomCardGrid(id:number,name:string,details:string,link:string,img:string) {
    return (
    <Col key={id}>
    <Card>
    <Card.Img variant="top" src={img} />
    <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        {details}
        </Card.Text>
        <Button onclick={link} variant="primary">Play</Button>
    </Card.Body>
    </Card>
    </Col>
    )
}
export default CustomCardGrid;*/

//import React from 'react';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import PillBadge from './PillBadge';

function CustomCardGrid({ id, name, details, link, img, tags }: { id: number; name: string; details: string; link: string; img: string , tags:string[]}) {
  return (
    <Col key={id}>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          {PillBadge(tags)}
          <Card.Text>{details}</Card.Text>
          <Button onClick={() => window.open(link, '_blank')} variant="primary">
            Play
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CustomCardGrid;