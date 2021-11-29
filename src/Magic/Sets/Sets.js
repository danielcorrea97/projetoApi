import React from 'react'
import api from "../services/api"
import "./Sets.scss"

export default class Sets extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sets: []
        }
    }

    componentDidMount() {
        api.get("/sets")
            .then((response) => this.setSets(response.data.sets))
    }

    setSets(response) {
        console.log(response)
        this.setState({
            sets: response
        })
    }

    render() {
        const { sets } = this.state
        return (
            <div>
                <ul>
                    {
                        sets.map((item, key) => (
                            <li className="set" key={key}>
                                <p>Name: {item.name}</p>
                                <p>Type: {item.type}</p>
                                <p>Release date: {item.releaseDate}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }

}