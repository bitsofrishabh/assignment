import React from 'react';
import axios from 'axios';

export default class Table extends React.Component {
    state = {
        try: [
            {
                "name": "James Smith",
                "email": "james.smith@gmail.com",
                "designation": "Software Engineer",
                "experience": "2",
                "location": "San Francisco",
                "salary": "25000",
                "laptopreceived": "Yes",
                "employeeid": "SP4321"
            }, {
                "name": "Maria Garcia",
                "email": "maria.garcia@gmail.com",
                "designation": "Senior Javascript Developer",
                "experience": "5",
                "location": "Tokyo",
                "salary": "45000",
                "laptopreceived": "Yes",
                "employeeid": "SP1564"
            }, {
                "name": "Lee Hartman",
                "email": "lee.hartman@gmail.com",
                "designation": "Support Engineer",
                "experience": "3",
                "location": "San Francisco",
                "salary": "18000",
                "laptopreceived": "No",
                "employeeid": "SP3423"
            }, {
                "name": "John Doe",
                "email": "john.deo@gmail.com",
                "designation": "Marketing Designer",
                "experience": "1",
                "location": "Tokyo",
                "salary": "15000",
                "laptopreceived": "No",
                "employeeid": "SP3212"
            }, {
                "name": "Robert Williams",
                "email": "robet.williams@gmail.com",
                "designation": "Javascript Developer",
                "experience": "2",
                "location": "New York",
                "salary": "22000",
                "laptopreceived": "Yes",
                "employeeid": "SP2111"
            }, {
                "name": "Thomas Gates",
                "email": "thomas.gates@yahoo.com",
                "designation": "Senior Marketing Designer",
                "experience": "7",
                "location": "San Francisco",
                "salary": "35000",
                "laptopreceived": "No",
                "employeeid": "SP3214"
            }, {
                "name": "Davis Miller",
                "email": "davis.miller@hotmail.com",
                "designation": "Systems Administrator",
                "experience": "1",
                "location": "Singapore",
                "salary": "15000",
                "laptopreceived": "No",
                "employeeid": "SP4278"
            }, {
                "name": "Taylor Price",
                "email": "taylor.price@yahoo.com",
                "designation": "Support Engineer",
                "experience": "3",
                "location": "London",
                "salary": "18000",
                "laptopreceived": "No",
                "employeeid": "SP1280"
            }, {
                "name": "Anderson Hill",
                "email": "anderson.hill@rediffmail.com",
                "designation": "Support Engineer",
                "experience": "2",
                "location": "London",
                "salary": "20000",
                "laptopreceived": "No",
                "employeeid": "SP4490"
            }, {
                "name": "Jennifer Lopez",
                "email": "jennifer.lopez@hotmail.com",
                "designation": "Systems Administrator",
                "experience": "4",
                "location": "New York",
                "salary": "28000",
                "laptopreceived": "No",
                "employeeid": "SP1107"
            }, {
                "name": "Patricia Young",
                "email": "patricia.young@yahoo.com",
                "designation": "Software Engineer",
                "experience": "2",
                "location": "San Francisco",
                "salary": "24000",
                "laptopreceived": "Yes",
                "employeeid": "SP4021"
            }, {
                "name": "Dorothy Hall",
                "email": "doroty.hall@yahoo.com",
                "designation": "Senior Javascript Developer",
                "experience": "6",
                "location": "Singapore",
                "salary": "32000",
                "laptopreceived": "Yes",
                "employeeid": "SP0712"
            }, {
                "name": "Joseph White",
                "email": "joseph.white@hotmail.com",
                "designation": "Marketing Designer",
                "experience": "3",
                "location": "London",
                "salary": "18000",
                "laptopreceived": "No",
                "employeeid": "SP2981"
            }


        ]
    }

    render() {
        const name = this.state.try.map((item, index) => <tr key={index}>{`${item.name}`}</tr>);
        
        const email = this.state.try.map((item, index) => <tr key={index}>{`${item.email}`}</tr>);
        const designation = this.state.try.map((item, index) => <tr key={index}>{`${item.designation}`}</tr>);
        const experience = this.state.try.map((item, index) => <tr key={index}>{`${item.experience}`}</tr>);
        const location = this.state.try.map((item, index) => <tr key={index}>{`${item.location}`}</tr>);
        const salary = this.state.try.map((item, index) => <tr key={index}>{`${item.salary}`}</tr>);
        const laptopreceived = this.state.try.map((item, index) => <tr key={index}>{`${item.laptopreceived}`}</tr>);
        const employeeid = this.state.try.map((item, index) => <tr key={index}>{`${item.employeeid}`}</tr>);



        return (

            <div className="container table table-responsive">
                <table>
                    <th>
                        Employye Name
                    <td>
                            <p>{name}</p>
                        </td>
                    </th>

                    <th>
                        Employye Email
                    <td>
                            <p>{email}</p>
                        </td>
                    </th>
                    <th>
                        Employee Desig
                         <td>
                            <p>{designation}</p>
                        </td>
                    </th>

                    <th>
                        Experience
                    <td>
                            <p>{experience}</p>
                        </td>
                    </th>

                    <th>
                        Location
                            <td>
                            <p>{location}</p>
                        </td>
                    </th>

                    <th>
                        Salary
                        <td>
                            <p>{salary}</p>
                        </td>
                    </th>

                    <th>Laptop
                    <td>
                            <p>{laptopreceived}</p>
                        </td>
                    </th>

                    <th>E.Id
                    <td>
                            <p>{employeeid}</p>
                        </td>
                    </th>


                </table>
            </div>

        )
    }
}