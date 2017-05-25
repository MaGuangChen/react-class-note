import React ,{Component} from 'react';
import PropTypes from 'prop-types';

let productItems = [
//以下開始為524的門票
//524哈利播特
{ticketsType:"19歲以上 成人票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 560,
TotalAmount: 4,
UserSelectAmount:0,
date: 524,
situation:"哈利波特入圍",
DiscountedPrice: true
},
{ticketsType:"13-18歲 中學生票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 480,
TotalAmount: 2,
UserSelectAmount:0,
date: 524,
situation:"哈利波特入圍",
DiscountedPrice: false
},
{ticketsType:"7-12歲 小學生票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 330,
TotalAmount: 2,
UserSelectAmount:0,
date: 524,
situation:"哈利波特入圍",
DiscountedPrice: true
},
{ticketsType:"4-6歲 幼兒票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 200,
TotalAmount: 1,
UserSelectAmount:0,
date: 524,
situation:"哈利波特入圍",
DiscountedPrice: false
},
//524星際大戰入圍
{ticketsType:"19歲以上 成人票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 700,
TotalAmount: 1,
UserSelectAmount:0,
date: 524,
situation:"星際大戰入圍",
DiscountedPrice: true
},
{ticketsType:"13-18歲 中學生票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 630,
TotalAmount: 1,
UserSelectAmount:0,
date: 524,
situation:"星際大戰入圍",
DiscountedPrice: true
},
{ticketsType:"7-12歲 小學生票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 550,
TotalAmount: 2,
UserSelectAmount:0,
date: 524,
situation:"星際大戰入圍",
DiscountedPrice: true
},
{ticketsType:"4-6歲 幼兒票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 220,
TotalAmount: 2,
UserSelectAmount:0,
date: 524,
situation:"星際大戰入圍",
DiscountedPrice: true
},
//524魔戒入圍
{ticketsType:"19歲以上 成人票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 570,
TotalAmount: 15,
UserSelectAmount:0,
date: 524,
situation:"魔戒入圍",
DiscountedPrice: false
},
{ticketsType:"13-18歲 中學生票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 450,
TotalAmount: 3,
UserSelectAmount:0,
date: 524,
situation:"魔戒入圍",
DiscountedPrice: false
},
{ticketsType:"7-12歲 小學生票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 380,
TotalAmount: 10,
UserSelectAmount:0,
date: 524,
situation:"魔戒入圍",
DiscountedPrice: false
},
{ticketsType:"4-6歲 幼兒票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 170,
TotalAmount: 7,
UserSelectAmount:0,
date: 524,
situation:"魔戒入圍",
DiscountedPrice: false
},

//以下為525門票
//525哈利波特
{ticketsType:"19歲以上 成人票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 670,
TotalAmount: 4,
UserSelectAmount:0,
date: 525,
situation:"哈利波特入圍",
DiscountedPrice: false
},
{ticketsType:"13-18歲 中學生票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 500,
TotalAmount: 2,
UserSelectAmount:0,
date: 525,
situation:"哈利波特入圍",
DiscountedPrice: true
},
{ticketsType:"7-12歲 小學生票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 340,
TotalAmount: 4,
UserSelectAmount:0,
date: 525,
situation:"哈利波特入圍",
DiscountedPrice: false
},
{ticketsType:"4-6歲 幼兒票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 200,
TotalAmount: 4,
UserSelectAmount:0,
date: 525,
situation:"哈利波特入圍",
DiscountedPrice: true
},
//525星際大戰入圍
{ticketsType:"19歲以上 成人票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 700,
TotalAmount: 10,
UserSelectAmount:0,
date: 525,
situation:"星際大戰入圍",
DiscountedPrice: true
},
{ticketsType:"13-18歲 中學生票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 630,
TotalAmount: 1,
UserSelectAmount:0,
date: 525,
situation:"星際大戰入圍",
DiscountedPrice: false
},
{ticketsType:"7-12歲 小學生票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 470,
TotalAmount: 8,
UserSelectAmount:0,
date: 525,
situation:"星際大戰入圍",
DiscountedPrice: true
},
{ticketsType:"4-6歲 幼兒票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 200,
TotalAmount: 3,
UserSelectAmount:0,
date: 525,
situation:"星際大戰入圍",
DiscountedPrice: false
},
//525魔戒入圍
{ticketsType:"19歲以上 成人票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 600,
TotalAmount: 5,
UserSelectAmount:0,
date: 525,
situation:"魔戒入圍",
DiscountedPrice: true
},
{ticketsType:"13-18歲 中學生票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 550,
TotalAmount: 6,
UserSelectAmount:0,
date: 525,
situation:"魔戒入圍",
DiscountedPrice: false
},
{ticketsType:"7-12歲 小學生票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 440,
TotalAmount: 1,
UserSelectAmount:0,
date: 525,
situation:"魔戒入圍",
DiscountedPrice: true
},
{ticketsType:"4-6歲 幼兒票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 120,
TotalAmount: 17,
UserSelectAmount:0,
date: 525,
situation:"魔戒入圍",
DiscountedPrice: true
},


//以下為526門票
//526哈利波特
{ticketsType:"19歲以上 成人票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 590,
TotalAmount: 10,
UserSelectAmount:0,
date: 526,
situation:"哈利波特入圍",
DiscountedPrice: false
},
{ticketsType:"13-18歲 中學生票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 510,
TotalAmount: 7,
UserSelectAmount:0,
date: 526,
situation:"哈利波特入圍",
DiscountedPrice: true
},
{ticketsType:"7-12歲 小學生票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 310,
TotalAmount: 7,
UserSelectAmount:0,
date: 526,
situation:"哈利波特入圍",
DiscountedPrice: false
},
{ticketsType:"4-6歲 幼兒票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 140,
TotalAmount: 4,
UserSelectAmount:0,
date: 526,
situation:"哈利波特入圍",
DiscountedPrice: true
},
//526星際大戰入圍
{ticketsType:"19歲以上 成人票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 680,
TotalAmount: 5,
UserSelectAmount:0,
date: 526,
situation:"星際大戰入圍",
DiscountedPrice: false
},
{ticketsType:"13-18歲 中學生票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 640,
TotalAmount: 10,
UserSelectAmount:0,
date: 526,
situation:"星際大戰入圍",
DiscountedPrice: true
},
{ticketsType:"7-12歲 小學生票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 580,
TotalAmount: 4,
UserSelectAmount:0,
date: 526,
situation:"星際大戰入圍",
DiscountedPrice: false
},
{ticketsType:"4-6歲 幼兒票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 270,
TotalAmount: 1,
UserSelectAmount:0,
date: 526,
situation:"星際大戰入圍",
DiscountedPrice: true
},
//526魔戒入圍
{ticketsType:"19歲以上 成人票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 620,
TotalAmount: 17,
UserSelectAmount:0,
date: 526,
situation:"魔戒入圍",
DiscountedPrice: true
},
{ticketsType:"13-18歲 中學生票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 440,
TotalAmount: 3,
UserSelectAmount:0,
date: 526,
situation:"魔戒入圍",
DiscountedPrice: false
},
{ticketsType:"7-12歲 小學生票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 390,
TotalAmount: 10,
UserSelectAmount:0,
date: 526,
situation:"魔戒入圍",
DiscountedPrice: true
},
{
ticketsType:"4-6歲 幼兒票",
//Description:"【行程特色】◆五大必遊景點◆環球影城主題公園：24個以電影主題的遊樂設施與景點，其中18個專為新加坡獨家設計打造。 世界最高的雙軌過山車。 世界首部馬達加斯加過山車。馬來西亞樂高樂園LEGOLAND Malaysia：馬來西亞樂高樂園是亞洲第一座樂園，也是世界上第六座樂高樂園。於2012年9月15日在新山開幕。樂高水上公園：2013年10月21日，全新開幕的樂高樂園水上樂園，是在世界上最大及亞洲第一的高樂水上樂園名牌折扣暢貨中心Premium Outlets：東南亞第一個大型Outlets座落於柔佛新山，共分兩層樓旗下第70間購物中心。私房之旅：獨家代理龜硌漁村古米船遊河+傳統水上人家+貝類養殖場體驗在地風情。",
Price: 150,
TotalAmount: 4,
UserSelectAmount:0,
date: 526,
situation:"魔戒入圍",
DiscountedPrice: false
}
]

function ProductItem(props){
  return <div>{props.children}</div>
}

export default class ProductMainRightDisplay extends Component{
    constructor(props){
        super(props);
        /*this.state ={
          date: this.props.date,
          situation:this.props.situation,
          DiscountedPrice:this.props.DiscountedPrice
        };*/
    }
     
      
    render(){
      let date = this.props.date;
      let situation = this.props.situation;
      let DiscountedPrice = this.props.DiscountedPrice;

      let renderPushNineteen =[];//要印的東西
      let renderPushThirteen =[];//要印的東西
      let renderPushSeven =[];//要印的東西
      let renderPushFour =[];//要印的東西
      

 for(let i = 0; i< productItems.length; i++ ){

        
        if((date == productItems[i].date) && (situation == productItems[i].situation) && (DiscountedPrice == productItems[i].DiscountedPrice) && (productItems[i].ticketsType == "19歲以上 成人票")){

          renderPushNineteen.push(productItems[i].ticketsType,"｜",productItems[i].Price,"｜",productItems[i].TotalAmount);
        
        }else if((date == productItems[i].date) && (situation == productItems[i].situation) && (DiscountedPrice == productItems[i].DiscountedPrice) && (productItems[i].ticketsType == "13-18歲 中學生票")){
          renderPushThirteen.push(productItems[i].ticketsType,"｜",productItems[i].Price,"｜",productItems[i].TotalAmount);
        }else if((date == productItems[i].date) && (situation == productItems[i].situation) && (DiscountedPrice == productItems[i].DiscountedPrice) && (productItems[i].ticketsType == "7-12歲 小學生票")){
          renderPushSeven.push(productItems[i].ticketsType,"｜",productItems[i].Price,"｜",productItems[i].TotalAmount);
        }else if((date == productItems[i].date) && (situation == productItems[i].situation) && (DiscountedPrice == productItems[i].DiscountedPrice) && (productItems[i].ticketsType == "4-6歲 幼兒票")){
          renderPushFour.push(productItems[i].ticketsType,"｜",productItems[i].Price,"｜",productItems[i].TotalAmount);
        }
      }

  
 console.log(DiscountedPrice);

        
        
        
        return (
             <div>
        
         
          <table>

            <thead>
              <tr>
                <td>票種||</td>
                <td>說明||</td>
                <td>價格||</td>
                <td>可售數||</td>
                <td>User購物數</td>
              </tr>
            </thead>
          
          </table>

          
          <div>{renderPushNineteen}</div>
          <div>{renderPushThirteen}</div>
          <div>{renderPushSeven}</div>
          <div>{renderPushFour}</div>


       </div>
          );
    }

}
// 這應該是最後要印出的<div>{this.props.display}</div>
/* onSelectChange(e){
        let testbb = [];
        let updates = {};
        e.preventDefault();
        let date = e.target.value;
        if(date === 524){
            for(let i = 0 ; i< productItems.length;i++){
                   if(productItems[i].date === 524){
                     testbb.push(productItems[i]);
                     updates.reciveObject = testbb;
                   }
                   testbb = [];
            }
        
        }else if(date === 525){
               for(let i = 0 ; i< productItems.length;i++){
                   if(productItems[i].date === 525){
                     testbb.push(productItems[i]);
                     updates.reciveObject = testbb;
                   }
                   testbb = [];
            }

        }else if(date === 526){
               for(let i = 0 ; i< productItems.length;i++){
                   if(productItems[i].date === 526){
                     testbb.push(productItems[i]);
                     updates.reciveObject = testbb;
                   }
                   testbb = [];
            }

        }
        //判斷結束
        this.props.onSelect(updates);
    }*/

    /* <div className="nineteenUp">
           {this.props.nineteenUp}
           <div></div>
           </div>

          <div className="thirteenUp">
            {this.props.thirteenUp}
            <div></div>
          </div>

           <div className="sevenUp">
            {this.props.sevenUp}
            <div></div>
          </div>

          <div className="fourUp">
            {this.props.fourUp}
            <div></div>
          </div>
*/