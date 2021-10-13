import ListItem from "../ListItem/ListItem";
import "./List.css";

const List = () => {
  const foods = [
    { 
      id: 1,
      item: 'apple',
      value: 0 
    },
    { 
      id: 2,
      item: 'banana',
      value: 0 
    },
    { 
      id: 3,
      item: 'orange',
      value: 0 
    },
  ];

  return (
    <div className="List">
      {foods.map(food =>
        <ListItem food={food} key={food.id} />
      )}
    </div>
  )
}

export default List;