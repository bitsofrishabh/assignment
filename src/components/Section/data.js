
import React, { Component } from 'react';
import axios from 'axios';
import PieChart from './pieChart';

export class Data extends Component {

    state = {
        details: [],

    }
    componentWillMount() {
        axios.get('http://localhost:3000/users').then(response => {
            this.setState({
                details: response.data,
            })
        })

    }

    render() {

        return (
            <div>
                <PieChart count={this.state.details} />
            </div>
        );
    }
}

export default Data;