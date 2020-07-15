import React from 'react'

const Gallery = ({ image }) => {
    return (
        <div className="test-it-out">
            <img src={image.url} />
        </div>
    )
}

export default Gallery