import React, { useState } from 'react';
import './index.css';

const InputFields = () => {
  const [inputs, setInputs] = useState([
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
    { id: 4, value: '' },
  ]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('dragIndex', index);
  };

  const handleDrop = (e, index) => {
    const dragIndex = parseInt(e.dataTransfer.getData('dragIndex'), 10);
    const updatedInputs = [...inputs];
    const [draggedItem] = updatedInputs.splice(dragIndex, 1);
    updatedInputs.splice(index, 0, draggedItem);
    setInputs(updatedInputs);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e, index) => {
    const updatedInputs = [...inputs];
    updatedInputs[index].value = e.target.value;
    setInputs(updatedInputs);
  };

  return (
    <div  className='p-9'>
      <h2>Draggable Inputs</h2>
      <div    >
        {inputs.map((input, index) => (
          <div
            key={input.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            <input
              type="text"
              value={input.value}
              onChange={(e) => handleInputChange(e, index)}
              placeholder={`Input ${input.id}`}
              className='border-2 border-gray-300 m-2 p-2'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputFields;
