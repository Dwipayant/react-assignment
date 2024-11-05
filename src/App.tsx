import React from 'react';
import Person from './Component/Person';
import { Iperson } from './Model/Iperson';
import Login from './Component/Login';
const pdata:Iperson ={
  tableDetails:[
    {name:'Ram',email:'test@gamil.com',phone:9366545524,address:[{plot_No:93,landMark:'BBSR'}]},
    {name:'shym',email:'test1@gamil.com',phone:8957456124,address:[{plot_No:96,landMark:'ctc'}]},
    {name:'Hari',email:'test2@gamil.com',phone:8546975314,address:[{plot_No:92,landMark:'Puri'}]},
    {name:'Kamal',email:'test3@gamil.com',phone:6548723654,address:[{plot_No:63,landMark:'KH'}]}
  ]
};

function App() {
  return (
    <div className="App">
      {/* <div><h5>{process.env.REACT_APP_API_URL}</h5></div>
      <Person persondata={pdata}/> */}
      <Login/>
    </div>
  );
}


export default App;
