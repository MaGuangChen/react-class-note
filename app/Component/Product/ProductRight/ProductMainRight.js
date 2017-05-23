import React , {Component} from 'react';
import PropTypes from 'prop-types';

import MainFilter from './filter/MainFilter';

export default class ProductMainRight extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
          <div>
          <MainFilter />
          </div>
        );
    }
}