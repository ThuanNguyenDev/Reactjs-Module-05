
import './App.css';
import React,{Component} from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[],
      item:''
    };
  }


  handleChange = (event) => {
    this.setState(
      {
        item: event.target.value
      }
    );
  }

  handleAddItem = () => {
    const { item, list } = this.state;
  
    if (item.trim() !== '') {
      const updatedList = [list, item]; 
      this.setState({ list: updatedList, item: '' }); 
    }
  }
  
  render() {
    const { item, list } = this.state;

    return (
      <div className="App">
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add item"
          value={item}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAddItem}>Add</button>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

}

export default App;


