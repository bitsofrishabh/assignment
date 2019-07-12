import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


export default class BarChart extends Component {

    data = {
        labels: [
            'James Smith ',
            'Marica Garcia',
            'Robert Williams',
            'Thomas Gates',
            'Patrica Young'

        ],
        datasets: [{
            data: [2.3, 5.0, 2.4, 7.4, 1.3],  
            backgroundColor: [

                '#36A2EB',
                '#36A2EB',
                '#36A2EB',
                '#36A2EB',
                '#36A2EB',

            ],

        }]
    };

    constructor(props) {
        super(props);
        this.state = {
            Data: {}
        }
    }
    render() {
        // const usersList = this.props.count;
        // var list = '';
        // var count = 0;
        // for (var i = 0; i < usersList.length; i++) {
        //     var obj = this.props.count[i];
        //     list = obj.laptopreceived;
        //     if (list === 'No')
        //         count++;
        // }
        // console.log("Name: " + count);
        return (
            <div>

                <Bar data={this.data}

                    options={{ maintainAspectRatio: false }}

                />
            </div>
        )
    }
}
