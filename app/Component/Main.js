import React , {Component} from 'react';
import propTypes from 'prop-types';
//要印得component
import MainHeader from './Header/MainHeader';
import MainNav from './Nav/MainNav';
import MainProduct from './Product/MainProduct';


export default class Main extends Component {
      constructor(props) {
          super(props);//es6繼承
      }
      render(){          
          return(
              <div>
                <MainHeader />
                <MainNav />
                <MainProduct />
                <h1>Main Component試印</h1>
              </div>
          );
      }
}