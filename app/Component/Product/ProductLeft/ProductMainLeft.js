import React , {Component} from 'react';
import ProductDisplay from './ProductDisplay';
import SlideNext from './ProductSlide/SlideNext';
import SlidePrev from './ProductSlide/SlidePrev';

export default class ProductMainLeft extends Component {
    constructor(props){
        super(props);
        //讓初始state等於props
        this.state = {
            background:this.props.background ,
            title: this.props.title,
            dataCount: -1
        }
        this.handleContainer = this.handleContainer.bind(this);
    }
    handleContainer(updates){
         this.setState(updates);
    }

    

    render(){
        let img = this.state.background;
        let title = this.state.title; 
       
        return (
            <div>
              <ProductDisplay background={img} title={title}/>
              <SlideNext changeContainer = {this.handleContainer} dataCount={this.state.dataCount}/> 
              <SlidePrev changeContainer = {this.handleContainer} dataCount = {this.state.dataCount}/>
            </div>
        );
    }
}