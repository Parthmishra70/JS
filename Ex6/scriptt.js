let div1 = document.createElement("div")
let p1 = document.createElement("h1");
let span1 = document.createElement("p")

let div2 = document.createElement("div")
let p2 = document.createElement("h1");
let span2 = document.createElement("p")

let div3 = document.createElement("div")
let p3 = document.createElement("h1");
let span3 = document.createElement("p")

let div4 = document.createElement("div")
let p4 = document.createElement("h1");
let span4 = document.createElement("p")

let div5 = document.createElement("div")
let p5 = document.createElement("h1");
let span5 = document.createElement("p")



async function first(ele, p, span, div) {

document.body.appendChild(div);
    div.appendChild(p);
    let dots = "";
    p.innerText = ele;
    div.appendChild(span);

    for (let i = 0; i < 2; i++) {
        span.innerText = null;

        for (let i = 0; i < 4; i++) {

            span.innerText += dots
            dots = ""
            dots += "."
            await new Promise(resolve => setTimeout(resolve, 1000));

        }

    }

}

async function name() {
    await first("Initliazing hacking", p1, span1,div1)
    await first("Reading your files", p2, span2,div2)
    await first("Password files Detected",p3,span3,div3)
    await first("ending all passwords and personal files to server",p4,span4,div4)
    await first("cleaning up",p5,span5,div5)
}


name()
