import React , {Component} from 'react';

let shoppingCartList = [

{ticketsType:"7-12歲 小學生票",
detail:"2017-02-23(四)",
price: 2320,
totalAmount: 4},
{ticketsType:"19歲以上 成人票",
detail:"2017-02-22(三)",
price: 2820,
totalAmount: 2},
{ticketsType:"13-18歲 中學生票",
detail:"2017-02-23(五)",
price: 2420,
totalAmount: 5}

];
console.log(shoppingCartList[0].price);

export default class ShoppingCartForm extends Component {
    constructor(props){
        super(props);
        this.state = { prod: '', price: 0, qty: 0};
        this.AddNewProductList = this.AddNewProductList.bind(this);
    }
    //讓user輸入轉為此component的state
    
/*
 handleAddTodo(e, prod, price, qty){

        e.preventDefault();

        let todo =  {id: this.state.todos.length+1, name: prod, price: price, qty: qty, isCompleted: false};

        this.setState({
            todos : this.state.todos.concat(todo),
            filteredTodos : this.state.filteredTodos.concat(todo)
        })
    }
 */
    //傳props進method
     AddNewProductList(e){
         e.preventDefault();
           let prod = this.refs.prod.value;
           let price = this.refs.price.value;
           let qty = this.refs.qty.value;
         this.props.handleAddProductList(prod,price,qty);
     }

    render() {
        
        return (
           <div>
            <h1>澳門新濠天地-「水舞間」門票* 買就可免費搭乘摩天輪</h1>
            <ul className="shopping-cart-title">
               <li>選擇</li>
               <li>票種</li>
               <li>詳細</li>
               <li>刪除</li>
               <li>數量</li>
               <li>優惠價</li>
            </ul>
          
            <ul className="render-product-list">
               <li> <input type="checkbox" className="select-form__check-box"/></li>
               <li>{shoppingCartList[0].ticketsType}</li>
               <li>{shoppingCartList[0].detail}</li>
               <li>0</li>
               <li>{shoppingCartList[0].price}</li>
               <li><button>刪除按鈕</button></li>
               <li><button>修改按鈕</button></li>
            </ul>

      <form onSubmit={this.AddNewProductList}>
             <div className="add-new-product">
              <input type="text" ref="prod" placeholder="輸入商品名稱"/>
              <input type="text" ref="price"  placeholder="輸入商品價格"/>
              <input type="text" ref="qty" placeholder="輸入商品數量"/>
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