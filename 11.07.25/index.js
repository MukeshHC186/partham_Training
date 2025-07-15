const str = "hello";
const reversed = str.split('').reverse().join('');
console.log(reversed); // Output: "olleh"

// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
// }

// console.log(reversed); // Output: "olleh"

// const str = "hello";
// function reversed(str){
//  return str.split('').reverse().join('');
// }
// console.log("Reverse",reversed(str),str); // Output: "olleh"

function palendro(str){
    const reverse=str.split('').reverse().join('');
    return reverse === str
}
console.log(palendro("wol"));


