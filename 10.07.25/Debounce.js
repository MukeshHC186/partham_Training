
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

document.getElementById("searchbox").addEventListener('input', (e) => {
    debounceSearch(e.target.value);
});

