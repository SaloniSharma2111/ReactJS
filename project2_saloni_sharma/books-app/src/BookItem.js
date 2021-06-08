function BookItem(props) {
    return (
        <div>
            <table className="table table-light table-hover table-striped table-dense">
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Description</th>
                        <th>Categories</th>
                        <th>Thumbnail</th>
                    </tr>
                </thead>
                <tbody>
                    {props.books === undefined ? <tr>No result found for {props.search}</tr> :
                    props.books.map((book) => (
                        <tr key={book.id}>
                            <td><a href={book.volumeInfo.previewLink} target="_blank" rel="noreferrer">{book.volumeInfo.title}</a></td>
                            <td>{book.volumeInfo.description}</td>
                             {
                             book.volumeInfo.categories!== undefined && book.volumeInfo.categories.length > 0 ?      
                             book.volumeInfo.categories.map(category => (
                                     <td key={book.etag}><p>{category}</p></td>
                                )) : <td></td>
                            }

                            {
                            book.volumeInfo.imageLinks!== undefined && book.volumeInfo.imageLinks.thumbnail!== undefined ? 
                              <td><img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/></td> :
                              <td></td>
                            }

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookItem;