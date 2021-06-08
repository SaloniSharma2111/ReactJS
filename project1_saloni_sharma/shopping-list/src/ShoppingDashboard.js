import { Component } from 'react';
import ShoppingItem from './ShoppingItem';

class ShoppingDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputItem: '',
      items: []
    };
  }

  handleChange = (e) => {
    this.setState({ inputItem: e.target.value });
  }

  addToShoppingList = (e) => {
    e.preventDefault();
    if((this.state.inputItem.trim() ==="") || (this.state.inputItem.trim().length===0))
    {
      this.setState({ inputItem: ''});
    }
    else
    {
      let UniqueId = Date.now();
      const newShoppingList = this.state.items.concat({ id: UniqueId, value: this.state.inputItem, date: new Date().toLocaleString() });
      this.setState({ inputItem: '', items: newShoppingList });
    }

  }

  deleteFromList = (deletedItem) =>
  {
    this.setState({items: this.state.items.filter(item => item.id!== deletedItem)})
  }

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <form onSubmit={this.addToShoppingList}>
          <h1> Let's get your shopping list ready!</h1>
          <p>Write items in the input box and press "Add to Shopping List" or just press "Enter"</p>
          <input value={this.state.inputItem} onChange={this.handleChange} />
          <button type="submit" disabled={this.state.inputItem ? false : true}> Add to Shopping List</button>
        </form>
       <ShoppingItem items={this.state.items} deleteFromList={this.deleteFromList}/>
      </div>
    );
  }
}

export default ShoppingDashboard;
