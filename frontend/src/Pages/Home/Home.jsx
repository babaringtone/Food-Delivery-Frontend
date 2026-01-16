import React from 'react'
import Header from '../../Component/Header/Header'
import ExploreMenu from '../../Component/ExploreMenu'
import { useState } from 'react'
import FoodDisplay from '../../Component/FoodDisplay/FoodDisplay'
import AppDownload from '../../Component/AppDownload'


const Home = () => {

  const [category, setCategory] =useState("All");//category state to filter food items-currently selected menu category,default is "All"
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload />
    </div>
  )
}

export default Home
