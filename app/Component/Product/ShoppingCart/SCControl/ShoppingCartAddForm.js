import React , {Component} from 'react';

let shoppingCartList = [

{
id: 0,
ticketsType:"7-12歲 小學生票",
detail:"2017-02-23(四)",
price: 2320,
totalAmount: 4},
{
id: 1,
ticketsType:"19歲以上 成人票",
detail:"2017-02-22(三)",
price: 2820,
totalAmount: 2},
{
id: 2,
ticketsType:"13-18歲 中學生票",
detail:"2017-02-23(五)",
price: 2420,
totalAmount: 5}

];


export default class ShoppingCartAddForm extends Component {
    constructor(props){
        super(props);
        this.AddNewProductList = this.AddNewProductList.bind(this);
    }
    //讓user輸入轉為此component的state
    
    //傳props進method
     AddNewProductList(e){
         e.preventDefault();
           let ticketsType = this.refs.ticketsType.value;
           let detail = this.refs.detail.value;
           let price = this.refs.price.value;
           let totalAmount = this.refs.totalAmount.value;
           
         this.props.handleAddProductList(ticketsType,detail,price,totalAmount);
     }

    render() {
        
        return (
    <div>
      <form onSubmit={this.AddNewProductList}>
             <div className="add-new-product">
              <input type="text" ref="ticketsType" placeholder="輸入票券種類"/>
              <input type="text" ref="detail" placeholder="輸入商品描述" />
              <input type="text" ref="price"  placeholder="輸入商品價格"/>
              <input type="text" ref="totalAmount" placeholder="輸入商品數量"/>
              <button
              style={
                            {
                                backgroundColor: '#1e90ff',
                                border: '1px solid #555555',
                                color: 'white',
                                padding: '8px 19px',
                                textAlign: 'center',
                                textDecoration: 'none',
                                display: 'inline-block',
                                fontSize: '12px',
                                margin: '4px 2px',
                                cursor: 'pointer',
                                borderRadius: '12px'
                            }
                        }
                            >新增商品</button>
             </div>
           </form>
       </div>
        );
    }
}