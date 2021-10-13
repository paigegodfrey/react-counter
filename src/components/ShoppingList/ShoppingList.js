import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ListItemForm from "../ListItemForm/ListItemForm";
import ListItems from "../ListItems/ListItems";
import "./ShoppingList.css";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const addItem = item => {
    let newItem = { ...item, id: uuidv4() };
    setItems(items => [...items, newItem]);
  }

  return (
    <div className="ShoppingList">
      <h1>Shopping List</h1>
      <ListItemForm addItem={addItem} />
      <ListItems items={items} setItems={setItems} />
    </div>
  )
}

export default ShoppingList;