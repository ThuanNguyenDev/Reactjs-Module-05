import React , {Component} from "react";
import axios from 'axios'
import Test from "./Test";
export default class App extends Component {


  constructor(props) {
    super(props);

  this.state = {
        users : []
      };

}

// componentDidMount =  () => {
//   axios
//   .get("http://localhost:8080/api/show")
//   .then ( res => {
//     this.setState (res.data);

//   })

//   .catch (
//     err => {
//       throw err;
//     }
//   );

// }
  

  render() {


    // const {users} = this.state;

    return (

      <div>
     
        <Test />
      </div>
    )
  }
}
