//구구단을 만드는 리액트 컴포넌트를 만들어줘.

function MultiplicationTable() {
    const table = [];
    for (let i = 1; i <= 9; i++) {
        const row = [];
        for (let j = 1; j <= 9; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}

function MultiplicationTableGrid() {
    const table = MultiplicationTable();
    return (
        <table>
            {table.map((row, i) => (
                <tr key={i}>
                    {row.map((col, j) => (
                        <td key={j}>{col}</td>
                    ))}
                </tr>
            ))}
        </table>
    );
}
export default MultiplicationTableGrid;
