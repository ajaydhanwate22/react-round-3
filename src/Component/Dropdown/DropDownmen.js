import React from 'react'
import DropDown from './DropDown'

export default function DropDownmen() {
    const options = ['Option 1', 'Option 2', 'Option 3'];
  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Dropdown Example</h1>
      <DropDown options={options} />
    </div>
  );
};



// 3.Write a component called Dropdown that renders a dropdown menu with a list of options. Users should be able to select an option from the list, and the selected option should be displayed as the dropdown title.
