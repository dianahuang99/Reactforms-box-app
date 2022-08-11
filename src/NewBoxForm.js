import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { color: "", width: "", height: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(INITIAL_STATE);
    addBox(formData);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color: </label>
      <input
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />

      <label htmlFor="width">Width: </label>
      <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height: </label>
      <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

      <button>Add a new box!</button>
    </form>
  );
};

export default NewBoxForm;
