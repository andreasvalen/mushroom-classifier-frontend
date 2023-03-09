import React from "react";
import { IMusrooms } from "../api/interfaces";

interface MushroomProps {
  mushroom: IMusrooms;
}

const MushroomCard: React.FC<MushroomProps> = ({ mushroom }) => {
  return (
    <div>
      <h2>{mushroom.name}</h2>
      <img src={mushroom.image_url} alt={mushroom.name} />
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
    </div>
  );
};

export default MushroomCard;
