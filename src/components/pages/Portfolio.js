import React, { useContext } from 'react'
import { XMasonry, XBlock } from 'react-xmasonry'
import ImageContainer from './ImageContainer'
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component'
import ImageContext from '../../context/ImageContext'
import 'react-lazy-load-image-component/src/effects/blur.css'
require('isomorphic-fetch'); // or another library of choice.
var Dropbox = require('dropbox').Dropbox;
var dbx = new Dropbox({ accessToken: '' });
dbx.filesListFolder({path: ''})
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });

const Portfolio = ({ scrollPosition }) => {
    const { images } = useContext(ImageContext)

    return (
        <>
            <div className='grid'>
                <XMasonry targetBlockWidth={400}>{ images.map((image) => (
                    <XBlock key={ image.id === 0 ? 'persistent' : image.id }>
                        <div className="grid-item">
                            {/* <LazyLoadImage 
                                effect="opacity" 
                                scrollPosition={scrollPosition} 
                                src={image.url} 
                                alt={image.description}
                            /> */}
                            <ImageContainer
                                src={image.url}
                                alt={image.description}
                            />
                            {/* <img
                                loading="lazy"
                                src={image.url}
                                alt={image.description}
                            /> */}
                        </div> 
                    </XBlock>
                ))}
                </XMasonry>
            </div>
        </>
    )
}

export default trackWindowScroll(Portfolio)