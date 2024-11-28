function TodoRowItem() {

    const rowNumber = 1;
    const rowDescription='feed dog';
    const rowAssigned='Mohammadhosein';
    return (
        <tr>
            <th scope='row'>{rowNumber}</th>
            <th>{rowDescription}</th>
            <th>{rowAssigned}</th>
        </tr>

    )
}

export default TodoRowItem