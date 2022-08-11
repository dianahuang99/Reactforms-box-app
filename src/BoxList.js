import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";
import { v4 as uuid } from "uuid";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  const addBox = (formData) => {
    const newBox = { ...formData, id: uuid() };
    setBoxes((boxes) => [...boxes, newBox]);
  };

  const remove = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  return (
    <>
      <NewBoxForm addBox={addBox} />
      {boxes.map((box) => (
        <Box
          color={box.color}
          width={box.width + "em"}
          height={box.height + "em"}
          key={box.id}
          id={box.id}
          handleRemove={remove}
        />
      ))}
    </>
  );
};

export default BoxList;
