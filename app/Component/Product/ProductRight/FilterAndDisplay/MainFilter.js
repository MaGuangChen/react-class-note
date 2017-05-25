import React , {Component} from 'react';
import PropTypes from 'prop-types';
import ProductMainRightDisplay from './ProductMainRightDisplay';



export default class MainFilter extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: 524,
            situation:"哈利波特入圍",
            DiscountedPrice: true
        };
        this.onSelectChangeDate = this.onSelectChangeDate.bind(this);
        this.onSelectChangeSituation = this.onSelectChangeSituation.bind(this);
        this.onSelectChangeDiscountedPrice = this.onSelectChangeDiscountedPrice.bind(this);
        
    }
     onSelectChangeDate(e){
        let updates = {};//想回傳回去更新state的東西啦

        
        this.setState({//問題出在每次都改變了三個state了，應該要分開來改變
            date: e.target.value
        });
        updates.date = this.state.date;
        this.props.onSelect(updates);
    }

    onSelectChangeSituation(e){
        let updates = {};//想回傳回去更新state的東西啦

        e.preventDefault();
        this.setState({//問題出在每次都改變了三個state了，應該要分開來改變
            situation:e.target.value
        });
        updates.situation = this.state.situation;
        this.props.onSelect(updates);
    }
    

    onSelectChangeDiscountedPrice(e){
        let updates = {};//想回傳回去更新state的東西啦
        e.preventDefault();
        this.setState({//問題出在每次都改變了三個state了，應該要分開來改變
             DiscountedPrice: e.target.value
        });
        updates.DiscountedPrice = this.state.DiscountedPrice;
        this.props.onSelect(updates);
    }


    render(){
      
        return (
            <div>
             <h1>三鷹之森-吉卜力美術館送分享器二日券</h1>
             <select className="date" value={this.state.date} onChange={this.onSelectChangeDate}>
                    <option value="524">日期 2017-05-24</option>
                    <option value="525">日期 2017-05-25</option>
                    <option value="526">日期 2017-05-26</option>
                  
                </select>
               
                 <select className="situation" value={this.state.situation} onChange={this.onSelectChangeSituation}>
                    <option value="哈利波特入圍">哈利波特入圍</option>
                    <option value="星際大戰入圍">星際大戰入圍</option>
                    <option value="魔戒入圍">魔戒入圍</option>
                  
                </select>

                <select className="DiscountedPrice" value={this.state.DiscountedPrice} onChange={this.onSelectChangeDiscountedPrice}>
                    <option value= {true}>有優惠券</option>
                    <option value= {false}>無優惠券</option>
                </select>
                 <ProductMainRightDisplay date={this.state.date} situation={this.state.situation} DiscountedPrice={this.state.DiscountedPrice} />

                 

           </div>
        );
    }
}
