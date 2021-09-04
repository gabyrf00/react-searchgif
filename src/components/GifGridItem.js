import React from 'react'

export const GifGridItem = ({ img }) => {

    return (

        

        <div className="card animate__animated animate__fadeIn">
            <img src={img.img} alt={img.title}/>
            <p>{img.title}</p>
        </div>
    )

}
