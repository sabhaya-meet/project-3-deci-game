import styled from "styled-components";

const RoleDice = ({ currentDice, rollDice, diceImages }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={currentDice} alt="Dice" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  p {
    font-size: 24px;
  }

  .dice {
    cursor: pointer;
  }
`;
