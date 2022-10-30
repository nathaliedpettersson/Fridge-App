import { useState } from "react";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";

const App = (props) => {

  // Setting states for items in fridge, copy of items and category from fridge
  const [items, setItems] = useState([])
  const [orgItem, setOrgItem] = useState([])
  const [category, setCategory] = useState([])

  // Set items to array when adding products
  const getRefrigeratorItems = (refrigeratorObject) => {
    setItems(items => [...items, refrigeratorObject]);
    setOrgItem(orgItem => [...orgItem, refrigeratorObject]);

    // Prevent new button with same category name to be added
    if (!category.includes(refrigeratorObject.productCategory)) {
      setCategory(category => [...category, refrigeratorObject.productCategory])
      console.log(category);
    }

  }

  // Filter categories for user to decide what categories to show in DOM
  const filterCategories = (val) => {
    const tempArray = orgItem.filter(refrigeratorObject => refrigeratorObject.productCategory === val)
    setItems([...tempArray])
  }

  // All button which will get all items
  const showAllCategories = () => {
    setItems([...orgItem])
  }

  return (
    <div>
      <Form getRefrigeratorItems={getRefrigeratorItems} category={category}></Form>
      {orgItem.length > 0 && <Filter category={category} items={items} filterCategories={filterCategories} showAllCategories={showAllCategories}></Filter>}
      <ul className="card-container">
        {items.map((myItems, index) => {
          return (
            <li key={index}><h3>{myItems.productCategory}</h3>{myItems.productName} <p>{myItems.productAmount} pcs</p> <p>{myItems.productDate}</p></li>
          )
        })}
      </ul>

    </div>

  )
}


export default App;





