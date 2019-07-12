import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';


export default class PieChart extends Component {

    data = {
        labels: [
            'Receive ',
            'Not received',

        ],
        datasets: [{
            data: [57.1, 42.9], 
            backgroundColor: [
                '#FF6384',
                '#36A2EB',

            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#FFCE56'
            ]
        }]
    };

    constructor(props) {
        super(props);
        this.state = {
            Data: {}
        }
    }
    render() {
        const usersList = this.props.count;
        var list = '';
        var count = 0;
        for (var i = 0; i < usersList.length; i++) {
            var obj = this.props.count[i];
            list = obj.laptopreceived;
            if (list === 'No')
                count++;
        }
        console.log("Name: " + count);
        return (
            <div>

                <Pie data={this.data}
                    options={{ maintainAspectRatio: false }}

                />
            </div>
        )
    }
}
