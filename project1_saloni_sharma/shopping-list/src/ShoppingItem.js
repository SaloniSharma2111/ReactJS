/* Please note I'm using bootstrap in index.html for this component's css */
function ShoppingItem(props) {
    return (
        <div>
            <table className="table table-light table-hover table-striped table-dense">
                <thead>
                    <tr>
                        <th>Shopping Item</th>
                        <th>Remove</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.value}</td>
                            <td> <button className="btn btn-danger" onClick={() => props.deleteFromList(item.id)}>Delete</button></td>
                            <td> {item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShoppingItem;