import { useState } from "react";
import "./ListItem.css";

const ListItem = ({ food }) => {
  const { item, value } = food;
  const [count, setCount] = useState(value);

  const increment = () => {
    setCount(c => c < 25 ? c + 1 : 25);
  }

  const decrement = () => {
    setCount(c => c > 0 ? c - 1 : 0);
  }

  return (
    <div className="ListItem">
      <div className="list-item-container">
        <div className="counter-controls">
          <div className="counter decrement">
            <button onClick={decrement}>-</button>
          </div>
          <div className="counter count">
            {count}
          </div>
          <div className="counter increment">
            <button onClick={increment}>+</button>
          </div>
        </div>
        <div className="item">
          {item}
        </div>
      </div>
    </div>
  )
}

export default ListItem;