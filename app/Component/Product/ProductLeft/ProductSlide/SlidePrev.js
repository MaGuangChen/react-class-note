import React ,{Component} from 'react';


let data = {
           background: [
            "https://cdn.dribbble.com/users/1008875/screenshots/3514346/city.png",
            "https://cdn.dribbble.com/users/106132/screenshots/3515541/drax_dribbble.jpg",
            "https://cdn.dribbble.com/users/26971/screenshots/3515739/tape.jpg",
            "https://cdn.dribbble.com/users/973/screenshots/3515713/gather-desk-3.png"
           ],
           title: [
               "買就送日本行動上網分享器二日免費券",
               "★★新婚蜜月貴賓專屬優惠，祝您甜甜蜜蜜、恩愛一生★★",
               "小孩不佔床依大人價 扣一萬 (每房限兩大一小不佔 才可折扣)",
               "寵愛媽咪~感恩五月~好禮雙重送"
           ]
       };


export default class SlidePrev extends Component {
    constructor(props){
        super(props);
       
        this.onPrev = this.onPrev.bind(this);
    }

     onPrev(e){
        e.preventDefault();
        let i = this.props.dataCount;//從0開始加上去
        let updates = {};//儲存更新state的結果
        if(i<4 && i>0){
          let x = i-1;
          console.log("slidePrev目前props.dataCount 值"+i)
          console.log("slidePrev內容陣列數字"+x);
          updates.background = data.background[x];
          updates.title = data.title[x]; 
          updates.dataCount = x;
          this.props.changeContainer(updates);
        }
     }
       
     
    render(){
        
        return (
          <div>
            <button onClick = {this.onPrev} >previous one</button>
          </div>  
          
        );
    }
}