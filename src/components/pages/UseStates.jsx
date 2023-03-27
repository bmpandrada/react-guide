import React from 'react'
import state from '../imgs/useSTate.png'


const UseStates = () => {
  return (
    <div className='container'>
      
      <div className="container__pages">
        <div className='container__page1 page--1'>
      <img className='container__img' src={state} alt="" />
      </div>
      <div className='container__page2 page--2'>
      <div className='container__text'>
      <h2>UseState</h2>
      <p>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default UseStates
