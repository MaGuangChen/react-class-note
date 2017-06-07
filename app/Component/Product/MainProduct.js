import React , {Component} from 'react';
import propTypes from 'prop-types';

import ProductMainLeft from './ProductLeft/ProductMainLeft';
import ProductMainRight from './ProductRight/ProductMainRight'
import MainShoppingCart from './ShoppingCart/MainShoppingCart'
export default class MainProduct extends Component {
    constructor(props){
        super(props);
        
    }

    render(){
        return (
           <div>
            <ProductMainLeft 
            background="https://www.settour.com.tw/ss_img/GFG/0000/0028/67/GFG0000002867_s_300.jpg"
            title="預設標題喔"
            />
            <ProductMainRight/>
            <MainShoppingCart/>
           </div>
        );
    }
}