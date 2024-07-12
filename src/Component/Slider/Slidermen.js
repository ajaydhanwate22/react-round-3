import React from 'react'
import Slider from './Slider'

export default function Slidermen() {
  return (
    
    <div className="p-4">
    <h1 className="text-xl mb-4">Slider Example</h1>
        <Slider min={0} max={100} step={1} initialValue={50}/>
      </div>
    
  )
}


// 4. Write a component called Slider that renders a slider with a range of values. Users should be able to select a value from the range.
