import React from 'react'
import api from '../services/api'

export default class Formats extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formats: []
        }
    }

    componentDidMount() {
        api.get("/formats")
            .then((response) => this.setFormats(response.data.formats))
    }

    setFormats(response) {
        this.setState({
            formats: response
        })
    }

    render() {
        const { formats } = this.state
        return (
            <div>
                <ul>
                    {
                        formats.map((item, key) => (
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