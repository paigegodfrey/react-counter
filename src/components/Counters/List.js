import Counter from "../ListItem/ListItem";
import "./Counters.css";

const Counters = () => {
  const foods = [
    { 
      id: 1,
      item: 'apple',
      value: 0 
    },
    { 
      id: 2,
      item: 'apple',
      value: 0 
    },
    { 
      id: 3,
      item: 'apple',
      value: 0 
    },
  ];

  return (
    <div className="Counters">
      {foods.map(food =>
        <Counter food={food} key={food.id} />
      )}
    </div>
  )
}

export default Counters;