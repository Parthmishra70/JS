let p1 = document.createElement("h1");
let span = document.createElement("span")

p1.style = "display:inline;";
span.style = "font-size:40px;";

document.body.appendChild(p1);
document.body.appendChild(span);

async function first(ele) {

    let dots = "";
    p1.innerText = ele;

    for (let i = 0; i < 2; i++) {
        span.innerText = null;

        for (let i = 0; i < 4; i++) {

            span.innerText += dots
            dots = ""
            dots += "."
            await new Promise(resolve => setTimeout(resolve, 3000));

        }

    }

}
first("Initliazing hacking")
first("Reading your files")
first("Password files Detected")
first("ending all passwords and personal files to server")
first("cleaning up")


