import React from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';

import Header from '../shared/header';
import Home from '../home/home';
import Aboutme from '../aboutme/aboutme';
import Projects from '../project/project';
import Footer from '../../components/shared/footer';

const Render = () => {

    return(
        <div>
            <Header></Header>
            <Switch>
            <Route exact path="/projects" component={Projects}></Route>
                <Route exact path="/aboutme" component={Aboutme}></Route>
                <Route exact path="/home" component={Home}></Route>
                <Redirect from="" to="/home"></Redirect>
            </Switch>
            <Footer></Footer>
        </div>
    );
}

export default Render;