import React, { Component } from 'react';
import Armagedon from './Armagedon.jpg';


class CardItem extends Component {
    containerStyle = {
        margin: "auto",
        width: "500px",
       // backgroundColor: 'black'
    }

    headerStyle = {
        margin: "auto",
        width: "500px",
       // backgroundColor: 'white'
    }

    cardStyle = {
        margin: "auto",
        width: "300px",
        height: "250px",
       // backgroundColor: 'white'
    }

    footerStyle={
        margin: "auto",
        width: "500px",
       // backgroundColor: 'white'
    }

    render() {
        console.log(this.props);
        let cardName = this.props.cardData.CardName;
        let manaCost = this.props.cardData.ManaCost;
        let type = this.props.cardData.Type;
        //Edition not used
        let edition = this.props.cardData.Edition;
        let bodyText = this.props.cardData.BodyText;

        return (
            <div className="card" style={this.containerStyle}>
                <headers style={this.headerStyle} className="card-header row">
                    <h2 className="col">{cardName}</h2>
                    <h3 className="col">{manaCost}</h3>
                </headers>
                <div class="card-body" >
                    <img style={this.cardStyle} src={Armagedon} />
                    <div className="card-header row" >
                        <h8 className="col">{type}</h8>
                        <h8 className="col">{edition}</h8>
                    </div>
                    <div className="col">
                        {bodyText}
                        <br />
                        A bloody dawn broke over a scabbed and tortured world.
                </div>
                </div>
                <p style={this.footerStyle} className="blockquote-footer">001/015 M</p>
            </div>
        )
    }
}
export default CardItem;
