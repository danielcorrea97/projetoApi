import React from 'react'
import api from "../services/api"
import "./Cards.scss"

export default class Cards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          cards: []
        }
      }
    
      componentDidMount(){
        api.get("/cards")
        .then((response) => this.setCards(response.data.cards))
      }
    
      setCards(response){
        this.setState({
            cards: response
        })
      }
    render() {
        const { cards } = this.state;
        return (
            <div className="cardContainer">
                    {
                        cards.map((item, key) => (
                            <div className="card" key={key}>
                                <img src={item.imageUrl} alt={item.name}/>
                                <p>Name: {item.name}</p>
                                <p>Type: {item.type}</p>
                                <p>Rarity: {item.rarity}</p>
                                <p>Power: {item.power}</p>
                                <p>Mana cost: {item.manaCost}</p>
                            </div>
                        ))
                    }
            </div>
        )
    }

}