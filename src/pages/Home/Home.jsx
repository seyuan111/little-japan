import React, {useState} from 'react'
import './Home.css'
import Header from '../../components/Header'
import ExploreMenu from '../../components/ExploreMenu'

const Home = () => {
  const [categories, setCategories] = useState("All")
  return (
    <div>
      <Header />
      <ExploreMenu />
    </div>
  )
}

export default Home