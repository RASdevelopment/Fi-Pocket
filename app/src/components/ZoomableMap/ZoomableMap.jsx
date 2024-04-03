import React from 'react';
import map from '../../img/Mapa.svg'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const ZoomableImage = () => {
  return (
    <TransformWrapper
      // centerOnInit={true}
      initialPositionX={62}
    >
      <TransformComponent>
        <div id='MapBoxa'>
          <img src={map} alt="Mapa de la Facultad de Ingeniería"/>
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
};

export default ZoomableImage;