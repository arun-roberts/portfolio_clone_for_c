import React, { useState, useContext, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams
  } from "react-router-dom"
import { XMasonry, XBlock } from 'react-xmasonry'
import ImageContext from '../../context/ImageContext'

const Portfolio = () => {
    const { images } = useContext(ImageContext)
    let location = useLocation()
    

    return (
        <>
            <div className='grid'>
                <XMasonry>{ images.map((image) => (
                    <XBlock key={ image.id === 0 ? 'persistent' : image.id }>
                        <div className="grid-item">
                            <Link
                                key={image.id} 
                                to={{
                                    pathname: `/portfolio/${image.id}`,
                                    state: { background: location }
                                }}
                            >
                                <img src={image.url} />
                            </Link>
                        </div> 
                    </XBlock>
                ))}
                </XMasonry>
            </div>
        </>
    )
}

export default Portfolio