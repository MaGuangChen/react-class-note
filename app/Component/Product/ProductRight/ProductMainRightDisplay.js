import React ,{Component} from 'react';
import PropTypes from 'prop-types';



export default class ProductMainRightDisplay extends Component{
    constructor(props){
        super(props);

    }

    render(){
        
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

           <div className="nineteenUp">
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

          


       </div>
        );
    }

}
// 這應該是最後要印出的<div>{this.props.display}</div>