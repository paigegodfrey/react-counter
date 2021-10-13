import "./ListItem.css";

const ListItem = ({ item, handleIncrement, handleDecrement, handleDelete }) => {
  const { name, quantity } = item;

  return (
    <div className="ListItem">
      <div className="list-item-container">
        <i
          className="fa fa-times text-danger"
          id="delete-icon"
          onClick={handleDelete}
        />
        <div className="counter-controls">
          <div className="counter decrement">
            <button onClick={handleDecrement}>-</button>
          </div>
          <div className="counter count">
            {quantity}
          </div>
          <div className="counter increment">
            <button onClick={handleIncrement}>+</button>
          </div>
        </div>
        <div className="name">
          {name}
        </div>
      </div>
    </div>
  )
}

export default ListItem;