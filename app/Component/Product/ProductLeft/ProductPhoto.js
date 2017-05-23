import React , {Component} from 'react';

export default class ProductPhoto extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
            <div>
               <img src ="https://www.settour.com.tw/ss_img/GFG/0000/0028/67/GFG0000002867_s_300.jpg" /><br/>
               <span>買就送日本行動上網分享器二日免費券</span>
               <p>早鳥優惠：出發前90天訂購.第二人省10,000 查看說明
早鳥優惠：出發前60天訂購.第二人省7,000 查看說明
早鳥優惠：出發前45天訂購.第二人省5,000 查看說明</p>
            </div>
        );
    }
}



