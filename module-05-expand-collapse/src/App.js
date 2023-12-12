import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: false
    };
  }


  toggleExpand = () => {
    this.setState(prevState => ({
      isExpand: !prevState.isExpand
    }));
  }



  render() {
    return (
      <div className="App">
        <h1>Conditional Rendering</h1>
        {this.state.isExpand ? (
          <div>
            <button onClick={this.toggleExpand}>Đóng giới thiệu</button>
            <p>Nội dung giới thiệu</p>
          </div>
        ) : (
          <button onClick={this.toggleExpand}>Xem giới thiệu</button>
        )}
      </div>
    );
  }



}


export default App;
