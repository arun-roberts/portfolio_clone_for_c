import React from 'react'
import portrait from '../images/celia.jpg'

const About = () => {
    return (
        <div className="about-section">
            <figure className="about-section__figure">
                <img className="about-section__image" src={portrait} alt="Celia Dowzer" />
            </figure>
            <p className="about-section__text">
                Cupcake ipsum dolor sit amet ice cream lollipop jelly-o chocolate bar. Donut ice cream caramels I love macaroon cheesecake jelly-o. Macaroon gummies I love.
                <br/>
                <br/>
                Jelly-o cotton candy danish caramels fruitcake. Macaroon croissant icing jujubes oat cake chocolate bar liquorice. Cake sugar plum sweet gingerbread bear claw dragée marzipan dessert. Gingerbread caramels I love I love chupa chups halvah I love cookie bonbon.
                <br/>
                <br/>
                Pastry I love soufflé jelly beans. Bear claw gummies cheesecake caramels danish sweet brownie. Lollipop liquorice sesame snaps. Carrot cake gummi bears I love candy canes marshmallow tiramisu.
                <br/>
                <br/>
                Fruitcake dessert I love tiramisu pie. Pie cookie soufflé. Marzipan bonbon I love lemon drops dragée cotton candy croissant I love. Jujubes brownie muffin oat cake sweet dessert candy dessert tart.
            </p>
        </div>
    )
}

export default About