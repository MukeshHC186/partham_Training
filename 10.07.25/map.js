const arr = [1,2,3,4,5,6,7,8,9,10];
const sqNum = arr.map((number)=>{
    return number * number;
})
// console.log("sqNum :-", sqNum)

const oddNum = arr.filter((number)=>{
    return number % 2 !==0
})
// console.log("oddNumbewr :-",oddNum)
 const user =[
    {name:"Alice", age: 10},
    {name:"David", age: 10},
    {name:"Mike", age: 10}
 ]
 const names = user.map((e) => {
     return e.name
 }).filter((user)=> user!=='David')
//  console.log(names)

 const sum = arr.reduce((acc,curr)=>{
    return acc = acc + curr;
 }, 0)
console.log("sum", sum)

const fruitList = ['apple','banana','mango','apple','mango','mango']
const countObj = fruitList.reduce((acc,curr)=>{
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
},{})
console.log(countObj);


  