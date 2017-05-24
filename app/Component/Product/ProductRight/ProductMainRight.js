import React , {Component} from 'react';
import PropTypes from 'prop-types';

import MainFilter from './filter/MainFilter';
import ProductMainRightDisplay from './ProductMainRightDisplay';
import SelectTest from './filter/SelectTest';
export default class ProductMainRight extends Component {
    constructor(props){
        super(props);
        this.state ={
          
            //要render的
            reciveObject: []
        };
        this.handleFilter = this.handleFilter.bind(this);
    }
    //用來更新state
     handleFilter(updates){
         this.setState(updates);
}

    render(){
        //測試中
       console.log(this.state.reciveObject);

        //試驗轉化object到jsx
        let a = this.state.reciveObject;

        let nineteenUp=[];
        let thirteenUp=[];
        let sevenUp=[];
        let fourUp=[];
        for(let i = 0 ; i < a.length;i++){
            if(a[i].ticketsType === "19歲以上 成人票" ){
                
                 nineteenUp.push(a[i].ticketsType,"｜",a[i].Price,"｜",a[i].TotalAmount);
            }else if(a[i].ticketsType === "13-18歲 中學生票"){
              thirteenUp.push(a[i].ticketsType,"｜",a[i].Price,"｜",a[i].TotalAmount);
            }else if(a[i].ticketsType === "7-12歲 小學生票"){
                 sevenUp.push(a[i].ticketsType,"｜",a[i].Price,"｜",a[i].TotalAmount);
            }else if(a[i].ticketsType === "4-6歲 幼兒票"){
                fourUp.push(a[i].ticketsType,"｜",a[i].Price,"｜",a[i].TotalAmount);
            }
        }
       
        return (
          <div>
          <MainFilter onSelect={this.handleFilter}/>
          <ProductMainRightDisplay nineteenUp={nineteenUp} thirteenUp={thirteenUp} sevenUp={sevenUp} fourUp={fourUp} />
          <SelectTest/>
          </div>
        );
    }
}
//onSelect={this.handleFilter}