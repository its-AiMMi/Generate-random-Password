const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


let pass1El = document.getElementById("pass1")
let pass2El = document.getElementById("pass2")
// let reset = 0
function generate() {
    pass1El.textContent = " "
    let i = 0
    for (i === 0; i < 15; i++) {
        let rand1 = Math.floor(Math.random() * characters.length)
        pass1El.textContent += characters[rand1]
    }
    pass2El.textContent = " "
    for (let y = 0; y < 15; y++) {
        let rand2 = Math.floor(Math.random() * characters.length)
        pass2El.textContent += characters[rand2]
    }
    console.log("clicked")
}
// console.log(characters.length)