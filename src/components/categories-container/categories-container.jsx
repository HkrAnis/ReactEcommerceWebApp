import React from 'react'
import './categories-container.styles.scss'
import Categorycontainer from './category container/category-container'

const CategoriesContainer = ({categories}) => {
    return (
    
    <div className="categories-container">{
        categories.map((category)=>{
            return <Categorycontainer key={category.id} img={category.imageUrl} title={category.title}></Categorycontainer>
            })}
    </div>
  )}
export default CategoriesContainer
