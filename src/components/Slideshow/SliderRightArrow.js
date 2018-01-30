import React from 'react'
import { Icon } from 'semantic-ui-react';

const SliderRightArrow = ({ nextSlide }) => {
  return (
    <div className="slider-right-arrow" onClick={nextSlide}>
      <Icon name='chevron right' />
    </div>
  )
}

export default SliderRightArrow
