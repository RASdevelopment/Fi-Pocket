import React from 'react';
import { ReactComponent as MapaSVG} from '../../img/Mapa.svg';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const ZoomableImage = () => {
  return (
    <TransformWrapper
      initialPositionX={123.5}
    >
      <TransformComponent>
        <div id='BuildingBoxa'>
          <MapaSVG/>
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
};

export default ZoomableImage;