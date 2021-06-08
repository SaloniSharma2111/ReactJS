import { Component } from 'react';
import axios from 'axios';
import BookItem from './BookItem';
import loader from './loader.svg';

class BookStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputItem: 'harry potter',
            books: [],
            hasErrors: false,
            isLoading: true
          };
    }

    componentDidMount() {
        this.getData(this.state.inputItem);
        this.setState({isLoading: false});
    }

    handleChange = (e) => {
        this.setState({ inputItem: e.target.value });
        this.getData(this.state.inputItem);  //Please feel free to comment this line, if you don't wan't to see the data fetch as the user types. I wasn't sure.
    }

    searchBooks = (e) => {
        e.preventDefault();
        if((this.state.inputItem.trim() ==="") || (this.state.inputItem.trim().length===0))
        {
            this.setState({ inputItem: ''});  //this is to avoid errors in text nodes if user passes in empty string
        }
        this.getData(this.state.inputItem);
    }

    getData= (input) => {
        this.setState({isLoading:true});
        const url= `https://www.googleapis.com/books/v1/volumes?q="${input}"`;
        const promise = axios.get(url);
        promise
        .then((response) => {
        
          const bookInfo = response.data.items;
          this.setState({books: bookInfo, isLoading:false});
        })
        .catch(() => {
            this.setState({hasErrors: true});
        });
    }

render(){

    if(this.state.hasErrors){
        return(
            <div><h2>Oops! Looks like something went wrong. Please try again later:(</h2></div>
        );
    }

    return(
        <div style={{textAlign: "center"}}>
        <form onSubmit={this.searchBooks}>
        <h2>Welcome to the BookStore! Search the books by your favorite authors here!!</h2>
        <p>Write author or book name in the input box and press "Search" or just press "Enter"</p>
          <input value={this.state.inputItem} onChange={this.handleChange} />
          <button type="submit" disabled={this.state.inputItem ? false : true}> Search</button>
        </form>
                   
         {this.state.isLoading ? <div><img src={loader} alt="Loading Results...." /> </div>: <BookItem books={this.state.books} search={this.state.inputItem}/> }

        
        </div>
    );
    
}

}

export default BookStore;