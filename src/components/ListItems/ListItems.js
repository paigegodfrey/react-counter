import ListItem from "../ListItem/ListItem";
import "./ListItems.css";

const ListItems = ({ items, setItems }) => {

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
        quantity: item.quantity <25 ? +item.quantity + 1 : 25
      }
      :
      item
    ));
  }

  const deleteItem = idx => {
    let itemId = items[idx].id;
    setItems(items => items.filter(item =>
      item.id !== itemId
    ));
  }

  return (
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
  )
}

export default ListItems;