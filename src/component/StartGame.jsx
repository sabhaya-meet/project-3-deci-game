import React from "react";
import styled from "styled-components";
import diceImage from "../assets/dicesImage.png";
import { Button } from "../styled/Button";
const StartGame = ({ toggleGamePlay }) => {
  return (
    <Container>
      <div>
        <img src={diceImage} alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggleGamePlay}>Play Now</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1182px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;

// const Button = styled.button`
//   color: white;
//   padding: 10px 18px;
//   background-color: #000000;
//   border-radius: 5px;
//   min-width: 200px;
//   border: none;
//   font-size: 16px;
//   border: 1px solid transparent;
//   transition: 0.3s background ease-in;
//   cursor: pointer;

//   &:hover {
//     background-color: white;
//     border: 1px solid black;
//     color: black;
//     transition: 0.3s background ease-in;
//   }
// `;
export default StartGame;
