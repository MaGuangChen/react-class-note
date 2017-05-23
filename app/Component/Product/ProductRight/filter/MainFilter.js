import React , {Component} from 'react';
import PropTypes from 'prop-types';

import FilterDisplay from './FilterDisplay';

export default class MainFilter extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
           <div>
             <h1>右邊的title啦</h1>
             <FilterDisplay />
           </div>
        );
    }
}