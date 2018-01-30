import React from 'react'
import { Icon } from 'semantic-ui-react';

const SliderLeftArrow = ({ prevSlide }) => {
  return (
    <div className="slider-left-arrow" onClick={prevSlide}>
      <Icon name='chevron left' />
    </div>
  )
}

export default SliderLeftArrow
