import React , {Component} from 'react';

import propTypes from 'prop-types';

export default class MainNav extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
           <div>
              <ul>
                <li><a href="#">首頁</a></li>
                <li><a href="#">國外團體旅遊</a></li>
                <li><a href="#">國外自由行</a></li>
                <li><a href="#">國際機票</a></li>
                <li><a href="#">國外訂房</a></li>
                <li><a href="#">國內旅遊</a></li>
                <li><a href="#">國內訂房</a></li>
                <li><a href="#">旅遊票券</a></li>
              </ul>
           </div>
        );
    }
}