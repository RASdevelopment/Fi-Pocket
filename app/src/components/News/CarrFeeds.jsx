import React, { useEffect, useState } from 'react';
import { PaginasNoticiasData } from '../../admin/PaginasNoticias';
import Mapa from '../../img/Mapa.svg'

function CarrFeeds() {

    useEffect(() => {
        const cicloCarrousel = setTimeout(() => {
            window.FB.XFBML.parse();
        }, 500);

        return () => {
            clearInterval(cicloCarrousel);
        } 
      }, []);

    return (
        <div id="CarrouselFeeds" className='NetSwitchable'>
        
            <div id='ContCarr'>
                <div id='PageCont'>
                    <ul>
                        {
                            PaginasNoticiasData.map((element) => {
                                return <li key={element.id}><div id = {element.id} className="Page" > <div className="fb-page" data-href={element.URL} data-tabs="timeline" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite={element.URL} className="fb-xfbml-parse-ignore"><a href={element.URL}>{element.Nombre}</a></blockquote></div> </div></li>
                            })
                        }
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default CarrFeeds;