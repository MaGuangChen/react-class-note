import React , {Component} from 'react';

export default class ProductDisplay extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
               <img src ={this.props.background} /><br/>
               <h3>{this.props.title}</h3>
               <p>早鳥優惠：出發前90天訂購.第二人省10,000 查看說明
早鳥優惠：出發前60天訂購.第二人省7,000 查看說明
早鳥優惠：出發前45天訂購.第二人省5,000 查看說明</p>
            </div>
        );
    }
}



