import React, { useState, useEffect } from "react";
import { IMusrooms } from "../../../api/interfaces";
import { mushroomAPI } from "../../../api/mushroomAPI";
import MushroomCard from "../../MushroomCard";

const SearchPage: React.FC = () => {
  const [data, setData] = useState<[IMusrooms] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await mushroomAPI.getMushrooms();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        data.map((mushroom, idx) => (
          <MushroomCard mushroom={mushroom} key={`mc_idx`} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SearchPage;
