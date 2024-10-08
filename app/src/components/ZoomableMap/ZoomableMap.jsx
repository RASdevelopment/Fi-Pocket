import React, { useEffect } from 'react';
import { ReactComponent as MapaSVG} from '../../img/Mapa.svg';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const ZoomableImage = () => {
  return (
    <TransformWrapper
      initialPositionX={62}
    >
      <TransformComponent>
        <div id='MapBoxa'>
          <MapaSVG/>
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
};

export default ZoomableImage;