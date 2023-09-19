export default Event = () => {
    const handleClick = () => {
        alert('1번클릭');
    };

    const handleClick2 = (str) => {
        alert(str);
    };
    return (
        <>
            <button onClick={handleClick}>클릭</button>
            <button onClick={() => handleClick2('2번클릭')}>클릭</button>
        </>
    );
};
