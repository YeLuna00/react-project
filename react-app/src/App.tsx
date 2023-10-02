/*//import { JSX } from "react/jsx-runtime";
import ListGroup from "./ListGroup";
import Message from "./Message";
//import ImgCard from "./components/ImgCard";
import { Fragment } from "react";
import { PlayGames } from "./assets/GamesData";
//import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//import { Card } from 'react-bootstrap';
//import GridImgCard  from "./components/GridImgCard";
import CustomCardGrid from "./components/CustomCardGrid";
function App() {
  return (
  <Fragment>
    <Message/>
    <br></br>
    <ListGroup/>
    <br></br>
    <>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 1 }).map((_) => (
          PlayGames.map((PlayGames)=> ( CustomCardGrid(PlayGames.id,PlayGames.name,PlayGames.details,PlayGames.link,PlayGames.img)))
        ))}
      </Row>
    </>
    <br></br>
  </Fragment>) 

}

export default App
*/

//import React, { Fragment } from "react";
import ListGroup from "./ListGroup";
import { PlayGames } from "./assets/GamesData";
import Row from 'react-bootstrap/Row';
import CustomCardGrid from "./components/CustomCardGrid";
import { Fragment } from "react";
import NavBarScroll from "./components/NavBarScroll";
import PaginationAdvanced from "./components/PaginationAdvanced";
import DarkVariantExample from "./components/DarkVariantExample";

function App() {
  // Define a function to render the card grid
  const renderCardGrid = () => {
    return (
      <Row xs={1} md={4} className="g-4">
        {PlayGames.map((game) => (
          <CustomCardGrid
            key={game.id}
            id={game.id}
            name={game.name}
            details={game.details}
            link={game.gamelink}
            img={game.img}
            tags={game.tags}
          />
        ))}
      </Row>
    );
  };

  return (
    <Fragment>
      <NavBarScroll></NavBarScroll>
      <DarkVariantExample></DarkVariantExample>
      <br />
      <ListGroup />
      <br />
      {renderCardGrid()} {/* Render the card grid */}
      <br />
      <center>
      <PaginationAdvanced></PaginationAdvanced>
      </center>
    </Fragment>
  );
}

export default App;
