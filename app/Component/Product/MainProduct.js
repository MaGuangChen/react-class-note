import React , {Component} from 'react';
import propTypes from 'prop-types';
import ProductPhoto from './ProductLeft/ProductPhoto';

export default class MainProduct extends Component {
    constructor(props){
        super(props);
        
    }

    render(){
        return (
           <div>
            <ProductPhoto />
           </div>
        );
    }
}