import React , {Component} from 'react';
import PropTypes from 'prop-types';
import ProductMainRightDisplay from './FilterAndDisplay/ProductMainRightDisplay';
import MainFilter from './FilterAndDisplay/MainFilter';

export default class ProductMainRight extends Component {
    constructor(props){
        super(props);
        this.state ={
            date:524,
            situation:"哈利波特入圍"
            /*DiscountedPrice: true,
          
            //要render的
            reciveObject: [{ticketsType:"19歲以上 成人票",
Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 560,
TotalAmount: 4,
UserSelectAmount:0,
date: 524,
situation:"哈利波特入圍",
DiscountedPrice: true
},
{ticketsType:"13-18歲 中學生票",
Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 480,
TotalAmount: 2,
UserSelectAmount:0,
date: 524,
situation:"哈利波特入圍",
DiscountedPrice: false
},
{ticketsType:"7-12歲 小學生票",
Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 330,
TotalAmount: 2,
UserSelectAmount:0,
date: 524,
situation:"哈利波特入圍",
DiscountedPrice: true
},
{ticketsType:"4-6歲 幼兒票",
Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 200,
TotalAmount: 1,
UserSelectAmount:0,
date: 524,
situation:"哈利波特入圍",
DiscountedPrice: false
}]*/
        };
        this.handleFilter = this.handleFilter.bind(this);
    }
    //用來更新state
     handleFilter(updates){
         this.setState(updates);
}

    render(){
        //測試中
       
       

        //試驗轉化object到jsx
        /*let a = this.state.reciveObject;

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
        }*/
   
        return (
          <div>
          <MainFilter onSelect={this.handleFilter}/>
          </div>
        );
    }
}
//onSelect={this.handleFilter}
//<ProductMainRightDisplay nineteenUp={nineteenUp} thirteenUp={thirteenUp} sevenUp={sevenUp} fourUp={fourUp} />