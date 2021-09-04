import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    const {data:images, loading } = useFetchGifs(category);


    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {category} </h3>
            { loading ? <h4 className="animate__animated animate__flash">Cargando... </h4> : null }

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem key={img.id} img ={ img }/>
                    ))
                }
            </div>
        </>
    )
}
