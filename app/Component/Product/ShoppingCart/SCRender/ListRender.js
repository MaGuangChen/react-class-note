import React,{Component} from 'react';

export default class ListRender extends Component{
   constructor(props){
       super(props);
       this.state ={
           listStatus: "uncheck"
       }
       this.handleDeleteProductList = this.handleDeleteProductList.bind(this);
       this.handleListStatus = this.handleListStatus.bind(this);
       //------constructor()結束啦
   }

   //讓chekbox改變狀態，以便刪除修改或是加入購物車
   handleListStatus(){
     if(this.state.listStatus !== "check"){
         this.setState({
           listStatus: "check"
          })
     }else {
        this.setState({
            listStatus: "uncheck"
        })
     }
     
     //------handleListStatus()結束啦
   }
   //透過checkbox狀態刪除該id商品
   handleDeleteProductList(){
       let id = this.props.id;
       if(this.state.listStatus === "check"){
           this.props.handleDeleteProductList(id);
           
       }
   }


    render(){
       
        return (
        <div>
          <ul className="product-list-render">
             <li><input onChange={this.handleListStatus} type="checkbox"/></li>
             <li>{this.props.id}</li>
             <li>{this.props.ticketsType}</li>
             <li>{this.props.detail}</li>
             <li>{this.props.price}</li>
             <li>{this.props.totalAmount}</li>
             <li><button onClick={this.handleDeleteProductList}>刪除按鈕</button></li>
             <li><button>修改按鈕</button></li>
             <li><button>添加至結帳清單</button></li>
          </ul>
        </div>
    );

    }
    
}