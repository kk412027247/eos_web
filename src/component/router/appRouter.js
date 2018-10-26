import React from 'react';
import { Route, Link} from 'react-router-dom'
import Home from '../home/home';
import Page1 from '../page1/page1';
import Page2 from '../page2/page2';
import Page3 from '../page3/page3';


const AppRouter = () =>(

    <div>
      {/*<nav>*/}
        {/*<ul>*/}
          {/*<li>*/}
            {/*<Link to={'/'}>Home</Link>*/}
          {/*</li>*/}
          {/*<li>*/}
            {/*<Link to={'/page1/'}>page1</Link>*/}
          {/*</li>*/}
          {/*<li>*/}
            {/*<Link to={'/page2/'}>page2</Link>*/}
          {/*</li>*/}
          {/*<li>*/}
            {/*<Link to={'/page3/'}>page3</Link>*/}
          {/*</li>*/}
        {/*</ul>*/}
      {/*</nav>*/}

      <Route path={'/'} exact component={Home}/>
      <Route path={'/page1/'} exact component={Page1}/>
      <Route path={'/page2/'} exact component={Page2}/>
      <Route path={'/page3/'} exact component={Page3}/>

    </div>
  
);


export default AppRouter;
