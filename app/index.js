import React  from 'react';
import ReactDOM from 'react-dom';
import Main from './Component/Main.js';



ReactDOM.render(
     <Main Mes="Hello"/>,
     document.getElementById('root')
);
/*
ReactDOM.render(
  <Router history={hashHistory}>
    
    <Route path="/" component={Main}>
       <Route path="about" component={About}/>
       <Route path="Examples" component={Examples}/>
       <IndexRoute component={Weather}/>
    </Route>

  </Router>,
  document.getElementById('app')
);

*/