import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import dice1 from "../assets/dice/dice_1.png";
import dice2 from "../assets/dice/dice_2.png";
import dice3 from "../assets/dice/dice_3.png";
import dice4 from "../assets/dice/dice_4.png";
import dice5 from "../assets/dice/dice_5.png";
import dice6 from "../assets/dice/dice_6.png";
import { Button } from "../styled/Button";
import Rules from "./Rules";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

const GamePlay = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [selectedValue, setSelectedValue] = useState();
  const [currentDice, setCurrentDice] = useState(dice1); // default image
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);

  const rollDice = () => {
    if (!selectedValue) {
      setError("You have not selected any number");
      return;
    }
    const randomIndex = Math.floor(Math.random() * 6); // 0 to 5
    setCurrentDice(diceImages[randomIndex]);

    if (selectedValue === randomIndex) {
      setTotalScore((prev) => prev + randomIndex);
    } else {
      setTotalScore((prev) => prev - 2);
    }

    setSelectedValue(undefined);
  };

  const resetScore = () => {
    setTotalScore(0);
  };
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore totalScore={totalScore} />
        <NumberSelector
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          error={error}
          setError={setError}
        />
      </div>
      <RoleDice
        currentDice={currentDice}
        rollDice={rollDice}
        diceImages={diceImages}
      />

      <div className="btns">
        <Button onClick={resetScore}>Reset</Button>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  /* padding-top: 70px; */
  .top_section {
    display: flex;
    align-items: end;
    justify-content: space-between;
  }

  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;
