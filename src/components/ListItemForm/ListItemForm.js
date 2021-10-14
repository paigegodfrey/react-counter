import { useState } from "react";
import "./ListItemForm.css";

const ListItemForm = ({ addItem }) => {
  const INITIAL_STATE = { name: "", quantity: 0 };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = evt => {
    evt.preventDefault();
    addItem(formData);
    setFormData(INITIAL_STATE);
  }

  const handleChange = evt => {
    const { value, name } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  return (
    <form className="ListItemForm" onSubmit={handleSubmit}>
      <label htmlFor="name">Item:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
      />
      <button>Add item!</button>
    </form>
  )
}

export default ListItemForm;