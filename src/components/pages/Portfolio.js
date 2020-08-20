import React, { useContext } from 'react'
import { XMasonry, XBlock } from 'react-xmasonry'
import ImageContainer from './ImageContainer'
import { trackWindowScroll } from 'react-lazy-load-image-component'
import ImageContext from '../../context/ImageContext'

const Portfolio = () => {
    const { images } = useContext(ImageContext)

    return (
            <div className='grid'>
                <XMasonry targetBlockWidth={500}>{ images.map((image) => (
                    <XBlock key={ image.id === 0 ? 'persistent' : image.id }>
                        <div className="grid-item">
                            <ImageContainer
                                src={image.url}
                                alt={image.description}
                                width={image.width}
                                height={image.height}
                            />
                        </div> 
                    </XBlock>
                ))}
                </XMasonry>
            </div>
    )
}

export default trackWindowScroll(Portfolio)