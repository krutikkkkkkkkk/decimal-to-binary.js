function convertToBinary() {
let decimal = document.getElementById('decimal').value
document.getElementById('binary').innerText = null
console.log(decimal)
for(i=0; decimal > 0; i++){
    let binary = decimal %2;
    decimal = decimal/2
    decimal = Math.trunc(decimal);
    binary = Math.trunc(binary);
    console.log(binary)
    document.getElementById('binary').innerText += binary
}
let bits = document.getElementById('binary').innerText ;
console.log(bits)
bits = reverseString(bits);
document.getElementById('binary').innerText = bits
}

function reverseString(str) {
    return str.split("").reverse().join("");
}
