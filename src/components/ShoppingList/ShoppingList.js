import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import ListItemForm from "../ListItemForm/ListItemForm";
import ListItem from "../ListItem/ListItem";
import "./ShoppingList.css";

const ShoppingList = () => {
  const [items, setItems] = useState([]);

  const addItem = item => {
    let newItem = { ...item, id: uuidv4() };
    setItems(items => [...items, newItem]);
  }

  const deleteItem = idx => {
    let itemId = items[idx].id;
    setItems(items => items.filter(item =>
      item.id !== itemId
    ));
  }

  const decrement = idx => {
    let itemId = items[idx].id;
    setItems(items => items.map(item =>
      item.id === itemId ?
        {
          ...item,
          quantity: item.quantity > 0 ? +item.quantity - 1 : 0
        }
        :
        item
    ));
  }

  const increment = idx => {
    let itemId = items[idx].id;
    setItems(items => items.map(item =>
      item.id === itemId ?
        {
          ...item,
          quantity: item.quantity < 25 ? +item.quantity + 1 : 25
        }
        :
        item
    ));
  }

  return (
    <div className="ShoppingList">
      <h1>Shopping List</h1>
      <p>(Max quantity per item: 25)</p>
      <ListItemForm addItem={addItem} />
      <div className="ListItems">
        {items.map((item, idx) => (
          <ListItem
            item={item}
            handleDecrement={() => decrement(idx)}
            handleIncrement={() => increment(idx)}
            handleDelete={() => deleteItem(idx)}
            key={item.id}
          />
        ))}
      </div>
    </div>
  )
}

export default ShoppingList;