import React from 'react'
import { useState } from 'react';
import { homeData } from '../../data/data';

const Home = () => {
  const [data] = useState(homeData)
  return (
    <div className='container'>
      {data.map(({id, link})=>{
     return <div className="container__pages" key={id}>
        
          
       
        <div className='container__page1 page--1'>

          <h1 className='container__h1'>Welcome to React Refresher  <a href={link}>Learn React</a></h1>
      </div>
      
      <div className='container__page2 page--2'>
       
      </div>
      </div>
       })}
    </div>
  )
}

export default Home
