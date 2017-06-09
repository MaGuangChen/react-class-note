import React , {Component} from 'react';
import ShoppingCartAddForm from './SCControl/ShoppingCartAddForm';
import ListRender from './SCRender/ListRender';

export default class MainShoppingCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            productListRender:[

            ],
            //將要傳遞至ShoppingCartRender component並顯示在下方
            productList: [
             {
               id:0,  
               ticketsType:"7-12歲 小學生票",
               detail:"2017-02-23(四)",
               price: 2320,
               totalAmount: 4
              }
            ],
            //確認後本次要結帳的項目
            checkList: {
              id:1,
              ticketsType:"7-12歲 小學生票",
              detail:"2017-02-23(四)",
              price: 2320,
              totalAmount: 4
            },
        }
        this.handleDeleteProductList = this.handleDeleteProductList.bind(this);
        this.handleUpdateCheckList = this.handleUpdateCheckList.bind(this);
        this.handleAddProductList = this.handleAddProductList.bind(this);
        //-----constructor end----
    }
     //會在每次component的state或props被更新時自動呼叫
     componentDidUpdate(prevProps,prevState){
           //state被改變時
           if(this.state.productList !== prevState.productList){
              
           }
           
           //-----componentDidUpdate結束啦
     }
     //利用.map()方法將包含新增的商品全部返回至ListRender component
     handleRender(){
            let productList = this.state.productList;
            //let idMaker = math.floor();
            
              //循環productList的陣列並返回相同長度的ListRender component
              let showScreen =  this.state.productList.map(
                    (productList)=>{
                        return <ListRender
                               key={productList.id}
                               id={productList.id+1}
                               ticketsType={productList.ticketsType}
                               detail={productList.detail}
                               price={productList.price}
                               totalAmount={productList.totalAmount}
                               handleDeleteProductList={this.handleDeleteProductList}
                                />
                   })

                   
               return <div>{showScreen}</div>
               
     }



     //新增購物車清單商品，須透過componentDidUpdate來真正新增至ListRender component
     handleAddProductList(ticketsType,detail,price,totalAmount){

        //產生新的商品到state.productList陣列中
        let newProduct = {
            id:this.state.productList.length,
            ticketsType: ticketsType,
            detail:detail,
            price: price,
            totalAmount: totalAmount
        };
        console.log(this.state.productList.length);
        this.setState({
           productList:this.state.productList.concat(newProduct)
        })
        console.log(this.state.productList.length);
        console.log(this.state.productList);
     //--------handleAddProductList結束啦
     }

      //對應商品id刪除購物車清單商品
      handleDeleteProductList(id){
        console.log(`this is delete id number ${id}`);
        this.setState({
            productList:this.state.productList.splice(id,1)
        })
        
      }

      //提交本次結帳清單
      handleUpdateCheckList(){

      }

       render(){
           
           //在這邊加入.filter，將傳進來的資料處理完並顯示出來
           return (
              <div>
                <ShoppingCartAddForm 
                handleAddProductList={this.handleAddProductList} />
                <div>購物車清單</div>
                選擇||ID||票種||說明||價格||可售數||<br/>
                <p>{this.handleRender()}</p>
              </div>
            );
       }

//這個component結束囉    
}