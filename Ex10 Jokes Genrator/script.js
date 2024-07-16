// //  Ex> elem.innerHtml is used to populate a div with html search online about this method and crate a website with a div tag containr a random joke given an arry  of jokes use math.random and fetch jokes from the internt (use any website to crate the array) your website should show a random jokes array should be 10. 

let jokes = [];
let num  = Math.floor(Math.random() * 10) +1 ;
let kop = document.createElement("h1");
let cont = document.querySelector("div");

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://official-joke-api.appspot.com/jokes/programming/ten")
    .then(response => response.json()).then((data) =>{
      data.forEach(element => {
        jokes.push(` ${element.setup} \n, ${element.punchline} `)
      });
      showjoks()
    })
})

function showjoks(){
kop.innerText = jokes[num-1];
cont.append(kop);
}


