import React, {useState} from 'react'
import './Home.css'
import Header from '../../components/Header'
import ExploreMenu from '../../components/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay'

const Home = () => {
  const [categories, setCategories] = useState("All")
  return (
    <div>
      <Header />
      <ExploreMenu categories={categories} setCategories={setCategories} />
      <FoodDisplay />
    </div>
  )
}

export default Home