import React from 'react' 
import ReactDOM from 'react-dom'
function Hi(){
  return <div> Hello world!</div>;
}
ReactDOM.render(<Hi/>,document.querySelector('#root'));
