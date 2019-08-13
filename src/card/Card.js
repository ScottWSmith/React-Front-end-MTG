import React, { Component } from 'react';
import Armagedon from './Armagedon.jpg'
import CardItem from './CardItem'

class Card extends Component {
    render() {
        let myCardData = {
            CardName: 'Armageddon',
            ManaCost: '3W',
            Type: 'Sorcery',
            Edition: '5th Ed',
            BodyText: 'Destroy all lands.'
        }
        return (
            <div>
                <CardItem cardData={myCardData} />
            </div>
        );
    }
}
export default Card;