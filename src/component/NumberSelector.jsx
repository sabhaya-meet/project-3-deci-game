import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({
  selectedValue,
  setError,
  setSelectedValue,
  error,
}) => {
  const numberArray = [1, 2, 3, 4, 5, 6];

  const numberSekectorHandler = (value) => {
    setSelectedValue(value);
    setError("");
  };
  return (
    <NumberSelectorDiv>
      <p className="error">{error}</p>
      <div className="flex">
        {numberArray.map((value, i) => (
          <Box
            isSelected={value === selectedValue}
            onClick={() => numberSekectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorDiv>
  );
};

const NumberSelectorDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }

  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 65px;
  width: 65px;
  /* background-color: black; */
  /* color: white; */
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;

export default NumberSelector;
