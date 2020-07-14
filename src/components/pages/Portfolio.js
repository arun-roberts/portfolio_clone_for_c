import React, { useState } from 'react'
import { XMasonry, XBlock } from 'react-xmasonry'

const imgs = [
    {
        url: 'https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
    },
    {
        url: "https://images.pexels.com/photos/2023364/pexels-photo-2023364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        url: "https://images.pexels.com/photos/3780469/pexels-photo-3780469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        url: "https://images.pexels.com/photos/239581/pexels-photo-239581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        url: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        url: "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        url: "https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        url: "https://images.pexels.com/photos/3109596/pexels-photo-3109596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        url: "https://images.pexels.com/photos/858508/pexels-photo-858508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        url: "https://images.pexels.com/photos/836850/pexels-photo-836850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        url: "https://images.pexels.com/photos/2317540/pexels-photo-2317540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        url: "https://images.pexels.com/photos/921361/pexels-photo-921361.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    },
    {
        url: "https://images.pexels.com/photos/1988624/pexels-photo-1988624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        url: "https://images.pexels.com/photos/349609/pexels-photo-349609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
]

const Portfolio = () => {
    const [ images, addImage ] = useState(imgs)

    return (
        <div className='grid'>
            <XMasonry>{ images.map((image, id) => (
                <XBlock key={ id === 0 ? 'persistent' : id }>
                    <div className="grid-item">
                        <img src={image.url} />
                    </div> 
                </XBlock>
            ))}
            </XMasonry>
        </div>
    )
}

export default Portfolio