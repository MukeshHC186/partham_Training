
function debounce(fn, delay) {
    let timer;
    return function(args) {
        if (timer) {
            clearTimeout(timer); // pichla timer cancel
        }
        timer = setTimeout(() => {
            fn(args); // sirf tabhi chalega jab user ruk jaye
        }, delay);
    };
}

function searchQuery(value) {
    console.log("Final input after delay:", value);
}

const debounceSearch = debounce(searchQuery, 2000); // 2 sec delay

// document.getElementById("searchbox").addEventListener('input', (e) => {
//     debounceSearch(e.target.value);
// });
const num1 = [10,5,34,3]
const max = num1.reduce((acc, curr)=>{
    return curr > acc ? curr : acc;

})
console.log("max",max);



