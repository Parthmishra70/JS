// //  Ex> Write a js program to genrate a random number and store it in a variable.
//  the program then takes n input from the user to tell them whether the guess was correct greater or lesser  than the orignal number.
// 100 (no of guesses)  is the score of the user the program is excepted to terminated once the number is guassed.Number should be between 1-100      


const randomNumber = Math.floor(Math.random() * 100) + 1;
count = 0;

let put = document.getElementById("num");
let ans = document.createElement("h1");
let warn = document.createElement("h3");

document.getElementById("submit").addEventListener('click', () => {
    let value = put.value;
    name(value);
})


function name(val) {

    if (val != randomNumber) {
        if (val >= randomNumber) {
            count++;
            warn.innerText = `greater`;
        } else {
            count++;
            warn.innerText = `lesser`;
        }
        document.body.append(warn)
    } else {
        document.body.appendChild(ans)
        ans.innerText = `win ${randomNumber} \n your chances: ${count}`;
    }

}

