import React , {Component} from 'react';
import propTypes from 'prop-types';


export default class MainHeader extends Component {
      constructor(props) {
          super(props);//繼承所有props
      }
      render(){          
          return(
              <div>
                <h1>MainHeader Component 試印</h1>
              </div>
          );
      }
}