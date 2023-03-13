import React from "react";
import styled from "styled-components";
import { IMusroom, IPrediction } from "../api/interfaces";
import {
  StyledHeader,
  StyledIconImg,
  StyledMushroomImg,
  StyledWrapper,
} from "./MushroomCard";

interface MushroomPredictionProps {
  prediction: IPrediction;
}

const MushroomPredictionCard: React.FC<MushroomPredictionProps> = ({
  prediction,
}) => {
  const mushroom = prediction.prediction[0];
  console.log("pred", prediction, Number(prediction.probability).toFixed(2));
  const predStr = Number(prediction.probability * 100).toFixed(3);

  return (
    <div>
      <StyledPredictionDiv>
        {`Sannsynlighet:`}
        <span>{predStr}</span>
        {`%`}
      </StyledPredictionDiv>
      <StyledWrapper>
        <StyledHeader>
          {mushroom.name}{" "}
          {mushroom.edible && (
            <StyledIconImg src={`/edible-icon.png`} alt={"edible"} />
          )}
          {mushroom.poisonous && (
            <StyledIconImg src={`/poisonous-icon.png`} alt={"poisonous"} />
          )}
        </StyledHeader>
        <StyledMushroomImg src={mushroom.image_url} alt={mushroom.name} />
        <p>
          <strong>Area:</strong> {mushroom.area}
        </p>
        <p>
          <strong>Description:</strong> {mushroom.description}
        </p>
        <p>
          <strong>Edible:</strong> {mushroom.edible ? "Yes" : "No"}
        </p>
        <p>
          <strong>Poisonous:</strong> {mushroom.poisonous ? "Yes" : "No"}
        </p>
      </StyledWrapper>
    </div>
  );
};

export default MushroomPredictionCard;

const StyledPredictionDiv = styled.div`
  @font-face {
    font-family: retro;
    src: url(retroFont.ttf);
  }
  font-family: retro;
  font-size: 35px;
  text-align: center;

  span {
    font-family: "Comic Sans MS", "Comic Sans";
    font-weight: 800;
  }
`;
