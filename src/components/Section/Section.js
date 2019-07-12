import React from 'react';
import './Section.css';
import Table  from './Table';
import  Data  from './data';
import BarChart from './barChart';

class Section extends React.Component {
    render() {
        return (
            <div className="out">
                <div className="dashboard">
                    <div className="button">
                        Dashboard
                    </div>
                </div>
                <div style={{ background: 'white', width: '100vw', height: '100vh' }}>
                    <div aspectratio={3}>
                        <div style={{ background: 'white', width: '100%', height: '10%', 'borderStyle': 'ridge' }}>
                            Location Filters:
                            <select>
                                <option value="Orange">Orange</option>
                                <option value="Radish">Radish</option>
                                <option value="Cherry">Cherry</option>
                            </select>

                            </div>
                            <div style={{'display': 'flex'}}>
                            <div>
                                <div style={{ background: 'white', width: '100%', height: '80%', 'border-style': 'ridge', }}>
                                    <div >
                                        <div style={{ 'border-style': 'ridge', 'borderBottom': 'ridge' }}>
                                            <Data />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ background: 'white', width: '100%', height: '80%', 'borderStyle': 'ridge', }}>
                                <div>
                                    <div style={{ 'borderStyle': 'ridge', 'borderBottom': 'ridge' }}>
                                        Employee Experience Details
                                        <BarChart/>
                                     
                                </div>

                            </div>
                           
                                </div>
                            </div>
                        </div>

                        <div ><Table/></div>
                    </div>
                </div>

        )
    }
}

export default Section;