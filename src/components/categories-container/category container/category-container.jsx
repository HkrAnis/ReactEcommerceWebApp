import React from 'react'
import './category-container.styles.scss'

const Categorycontainer = ({id, img, title}) => {
    return (<div className="category-container" key={id}>
  <div className='background-image' 
                        style={{backgroundImage: `url(${img})`}}>
                        </div>
                            <div className="category-body-container">
                                <h2>{title}</h2>
                                <p>Shop now</p>
                            </div>
    </div>
)}
export default Categorycontainer