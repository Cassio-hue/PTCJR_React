import './index.css'
import food from './list'

function ListItem(props) {
  return <li>{props.value}</li>
}

function FoodList({ listFood }) {
  const listItems = listFood.map((greenFood, index) => (
    <ListItem key={index} value={greenFood} />
  ))
  return <ul className="card">{listItems}</ul>
}

export function Exemplo03() {
  return (
    <>
      <h1>Exemplo 03</h1>
      <div className="container1">
        {food.map((food) => (
          <div key={food.id} className="container2">
            <h3>{food.title}</h3>
            <FoodList listFood={food.content} />
          </div>
        ))}
      </div>
    </>
  )
}
