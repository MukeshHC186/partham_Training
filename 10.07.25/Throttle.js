function throttle(fn,delay){
    let lastTime = 0;
    return function(args){
        const now = Date.now();
        if(now - lastTime>=delay){
            lastTime=now;
            fn(args)
        }
    }
}
const throttleSearch = throttle(searchQuery,1000);
function searchQuery(value){
    console.log(value)
}
document.getElementById("searchbox").addEventListener("input",(e)=>{
    throttleSearch(e.target.value)
})