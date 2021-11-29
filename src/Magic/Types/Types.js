import React from 'react'
import api from '../services/api'
import "./Types.scss"

export default class Types extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            types: []
        }
    }

    componentDidMount() {
        api.get("/types")
            .then((response) => this.setTypes(response.data.types))
    }

    setTypes(response) {
        console.log(response)
        this.setState({
            types: response
        })
    }

    render() {
        const { types } = this.state
        return (
            <div>
                <ul>
                    {
                        types.map((item, key) => (
                            <li className="type" key={key}>
                                <p>{item}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }

}