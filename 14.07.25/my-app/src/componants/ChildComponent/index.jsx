const Child = (props) => {
    const {count,count1} = props
    return (<div>
        <h1>{count}</h1>
        <h1>{count1}</h1>
    </div>);
}
export default Child