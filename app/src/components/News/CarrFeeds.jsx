import React, { useEffect, useState } from 'react';
import { PaginasNoticiasData } from '../../admin/PaginasNoticias';

function CarrFeeds() {

    useEffect(() => {
        setTimeout(() => {
            window.FB.XFBML.parse();
        }, 500);
      }, []);

    return (
        <div id="CarrouselFeeds" className='NetSwitchable'>
            {/* <div class="fb-page" data-href="https://www.facebook.com/ingenieria.uady.mx/?locale=es_LA" data-tabs="timeline" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/ingenieria.uady.mx/?locale=es_LA" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/ingenieria.uady.mx/?locale=es_LA">Facultad de Ingeniería - UADY</a></blockquote></div> */}
            {/* <button onClick={() => {console.log("Aló"); ScrollToFeed();}}>Holaaa</button> */}
        
            <div id='ContCarr'>
                <div id='PageCont'>
                    <ul>
                        {
                            PaginasNoticiasData.map((element) => {
                                return <li key={element.id}><div id = {element.id} className="Page" > <div className="fb-page" data-href={element.URL} data-tabs="timeline" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite={element.URL} className="fb-xfbml-parse-ignore"><a href={element.URL}>{element.Nombre}</a></blockquote></div> </div></li>
                            })
                        }
                        {/* <li><div id='0' className="Page"> <div class="fb-page" data-href="https://www.facebook.com/ingenieria.uady.mx" data-tabs="timeline" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/ingenieria.uady.mx" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/ingenieria.uady.mx">Facultad de Ingeniería - UADY</a></blockquote></div> </div></li>
                        <li><div id='2' className="Page"> <div class="fb-page" data-href="https://www.facebook.com/DEM.fbmx" data-tabs="timeline" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/DEM.fbmx" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/DEM.fbmx">División Estudiantil de Mecatrónica</a></blockquote></div> </div></li>
                        <li><div id='3' className="Page"> <div class="fb-page" data-href="https://www.facebook.com/face.uady" data-tabs="timeline" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/face.uady" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/face.uady">Universidad Autónoma de Yucatán UADY</a></blockquote></div> </div></li> */}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default CarrFeeds;