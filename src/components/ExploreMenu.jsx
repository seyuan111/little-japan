import React from 'react'
import '../seperateCSS/ExploreMenu.css'
import {menu_list} from '../assets/resources'

const ExploreMenu = ({categories, setCategories}) => {

  return (
    <div className="explore-menu" id="explore-menu">
        <h1>Browser through our categories</h1>
        <p className="explore-menu-text">Pick from different categories including appetizers, Sushi and Sashimi, Chef Kitchen Entrees, your favorite desserts, and special drinks.</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index) => {
                return (
                    <div onClick={()=> setCategories(prev => prev===item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={categories===item.menu_name?"active":""} src={item.menu_image}></img>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr></hr>
    </div>
  )
}

export default ExploreMenu