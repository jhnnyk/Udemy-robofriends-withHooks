import React from 'react';
import './Hello.css';

const Hello = (props) => {
  return (
    <div className='f1 tc'>
      <h1>Hello World</h1>
      <p>{props.greeting}</p>
    </div>
  );
}

// the below is functionally the same as above
// the below is just a function
//
// class Hello extends Component {
//   render() {
//     return (
//       <div className='f1 tc'>
//         <h1>Hello World</h1>
//         <p>{this.props.greeting}</p>
//       </div>
//     );
//   }
// }

export default Hello;