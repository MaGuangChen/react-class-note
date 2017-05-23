import React , {Component} from 'react';
import PropTypes from 'prop-types';

import DateFilter from './DateFilter';

export default class FilterDisplay extends Component {
    constructor(props){
        super(props);
    
    }

    render(){
        return (
          <div>
             <DateFilter/>
          </div>
        );
    }
}