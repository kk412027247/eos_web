import React from 'react';
import Header from '../header/header';
import { Route} from 'react-router-dom'
import Home from '../home/home';
import Page1 from "../page1/page1";
import Page3 from "../page3/page3";
import Page2 from "../page2/page2";
import SideBar from '../sideBar/sideBar';
import Dashboard from '../dashboard/dashboard';
import Producer from '../producer/producer';
import BlockDetail from "../dashboard/bolckDetail";
import UserDetail from "../dashboard/userDetail";
import Transaction from "../dashboard/transaction";
import './appRouter.css';


const AppRouter = () =>
  <div>
    <Header/>
    <SideBar/>
    <main id={'main'}>
      <Route path={'/'} exact component={Home}/>
      <Route path={'/page1/'} exact component={Page1}/>
      <Route path={'/page2/'} exact component={Page2}/>
      <Route path={'/page3/'} exact component={Page3}/>
      <Route path={'/dashboard/'} component={Dashboard}/>
      <Route path={'/producer/'} component={Producer}/>
      <Route path={'/blockDetail/:blockNumber'} component={BlockDetail}/>
      <Route path={'/userDetail/:user'} component={UserDetail}/>
      <Route path={'/transaction/:id'} component={Transaction}/>

    </main>
  </div>
;




export default AppRouter;
