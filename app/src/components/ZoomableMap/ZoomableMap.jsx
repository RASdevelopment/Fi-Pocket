import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const ZoomableImage = ({ imageUrl }) => {
  return (
    <TransformWrapper>
      <TransformComponent>
        <div id='MapBox'>
          <img src={imageUrl} alt="Zoomable"/>
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
};

export default ZoomableImage;