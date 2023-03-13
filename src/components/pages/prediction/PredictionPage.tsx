import queryString from "query-string";
import React, { useState } from "react";
import styled from "styled-components";
import { IMusroom } from "../../../api/interfaces";
import MushroomPredictionCard from "../../MushroomPredictionCard";

const PredictionPage: React.FC = () => {
  const predictionJSON = queryString.parse(window.location.search).prediction;
  const prediction = JSON.parse(predictionJSON as any);

  console.log("querystring_parsed: ", prediction);

  return (
    <CardsWrapper>
      <MushroomPredictionCard prediction={prediction as any} key={`mpc_0}`} />
    </CardsWrapper>
  );
};

export default PredictionPage;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
  div {
    margin: 4px;
  }
`;

const _DEBUG_prediction = {
  prediction: [
    {
      area: "Norge",
      description:
        "Kantarell har gul, traktformet hatt, nedløpende folder og god kantarellukt. Har samme gulfarge på undersiden som oversiden. Avrundet stilk.",
      edible: true,
      id: 32,
      image_url:
        "https://media.snl.no/media/116599/standard_compressed_kantarell_37810.jpg",
      latin_name: "Cantharellus cibarius",
      name: "Kantarell",
      poisonous: false,
    },
  ],
  probability: 0.5896577835083008,
};