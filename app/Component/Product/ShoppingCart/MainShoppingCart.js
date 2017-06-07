import React , {Component} from 'react';
import ShoppingCartForm from './ShoppingCartForm';

export default class MainShoppingCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            //將要傳遞至ShoppingCartRender component並顯示在下方
            productList: {
              ticketsType:"7-12歲 小學生票",
              detail:"2017-02-23(四)",
              price: 2320,
              totalAmount: 4
            },
            //確認後本次要結帳的項目
            checkList: {
              ticketsType:"7-12歲 小學生票",
              detail:"2017-02-23(四)",
              price: 2320,
              totalAmount: 4
            },
            prod: " ",
            price:"",
            qty: ""

        }
        this.handleUpdateProductList = this.handleUpdateProductList.bind(this);
        this.handleUpdateCheckList = this.handleUpdateCheckList.bind(this);
        this.handleAddProductList = this.handleAddProductList.bind(this);
        //-----constructor end----
    }
     //新增購物車清單商品
     handleAddProductList(prod,price,qty){
        this.setState({
            prod: prod,
            price: price,
            qty: qty
        })
     
     }

      //刪除購物車清單商品
      handleUpdateProductList(){
         this.setState()
      }

      //提交本次結帳清單
      handleUpdateCheckList(){

      }

       render(){
           return (
              <div>
               
                <ShoppingCartForm handleAddProductList={this.handleAddProductList} handleUpdateProductList={this.handleUpdateProductList} handleUpdateCheckList={this.handleUpdateCheckList} />
                <p>{this.state.prod}</p>
                <p>{this.state.price}</p>
                <p>{this.state.qty}</p>
              </div>
            );
       }

//這個component結束囉    
}