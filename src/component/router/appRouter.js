import React from 'react';
import Nav from '../nav/nav'
import Header from '../header/header';

import { Route} from 'react-router-dom'
import Home from '../home/home';
import Page1 from "../page1/page1";
import Page3 from "../page3/page3";
import Page2 from "../page2/page2";
import SideBar from '../sideBar/sideBar';


const AppRouter = () =>
  <div>
    <Header/>
    <SideBar/>
    <br/>
    <br/>
    <br/>

    <Nav/>
    <hr/>
    <Route path={'/'} exact component={Home}/>
    <Route path={'/page1/'} exact component={Page1}/>
    <Route path={'/page2/'} exact component={Page2}/>
    <Route path={'/page3/'} exact component={Page3}/>

  </div>
;




export default AppRouter;
