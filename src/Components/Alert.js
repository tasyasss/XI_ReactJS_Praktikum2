// // 3.          membuat custom element
// import React, {Component} from 'react';

// class Alert extends Component {
//     render(){
//         return (
//             <div className="alert alert-success"> 
//                 <h4>Info</h4>
//                 Belajar React JS itu menyenangkan
//             </div>
//         );
//     }
// }
// export default Alert; 


// 4.          membuat custom element dg props
import React, {Component} from 'react';
    class Alert extends Component {
        render(){
            return (
                <div className={"alert alert-" + this.props.type}>
                    <h4>{this.props.header}</h4>
                    {this.props.children} 
                </div>
            );
        }
    }
export default Alert; 