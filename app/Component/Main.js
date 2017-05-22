import React , {Component} from 'react';
import propTypes from 'prop-types';

import RequiredInputText from './RequiredInputText';

class Main extends Component {
   constructor(props){
       super(props);
   }

   render(){
       return (
          <div>
            <RequiredInputText />
          </div>
       );
   }
}
export default Main;