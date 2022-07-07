import React from 'react';
import './AccordianTitle.css'; 

function AccordianTitle({ children , isOpen, index,  handleClick, ...restProps }) {
  return (
    <div className='accordian-title' {...restProps } onClick={() => handleClick()} > 
    { children }

    {
        isOpen === true && (
            <img className='accordian-icon' src='images/Icons/close-slim.png' />
        )

    }
    {
        isOpen === false && (
            <img className='accordian-icon' src='images/Icons/plus.png' />
        )
    }
    </div>
  )
}

export default AccordianTitle;