import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import App from './App';
import Home from './pages/Home';

import InfoCar from './pages/InfoCar';
import InfoDevice from './pages/InfoDevice';
import InfoSim from './pages/InfoSim';

import DataPast from './pages/DataPast';
import DataReal from './pages/DataReal';

import StatisticsExterior from './pages/StatisticsExterior';
import StatisticsBasis from './pages/StatisticsBasis';
import StatisticsEmission from './pages/StatisticsEmission';
import StatisticsDatatable from './pages/StatisticsDatatable';
import StatisticsCloud from './pages/StatisticsCloud';

import ReCheck from './pages/Recheck';

import LibNormal from './pages/LibNormal';
import LibTotal from './pages/LibTotal';

import ManagementUser from './pages/ManagementUser';
import ManagementDepartment from './pages/ManagementDepartment';
import ManagementBulletin from './pages/ManagementBulletin';

class MyRouter extends React.Component{
    render() {
        return(
            <Router>
                <App>
                    <Route exact path="/" component={Home}/>
                    <Route path="/info/car" component={InfoCar}/>
                    <Route path="/info/device/device" component={InfoDevice}/>
                    <Route path="/info/device/sim" component={InfoSim}/>
                    <Route path="/data/real" component={DataReal}/>
                    <Route path="/data/past" component={DataPast}/>
                    <Route path="/statistics/exterior" component={StatisticsExterior}/>
                    <Route path="/statistics/basis" component={StatisticsBasis}/>
                    <Route path="/statistics/emission" component={StatisticsEmission}/>
                    <Route path="/statistics/datatable" component={StatisticsDatatable}/>
                    <Route path="/statistics/cloud" component={StatisticsCloud}/>
                    <Route path="/recheck" component={ReCheck} />
                    <Route path="/lib/normal" component={LibNormal}/>
                    <Route path="/lib/total" component={LibTotal}/>
                    <Route path="/management/user" component={ManagementUser} />
                    <Route path="/management/department" component={ManagementDepartment} />
                    <Route path="/management/bulletin" component={ManagementBulletin} />
                </App>
            </Router>
        );
    }
}

export default MyRouter;