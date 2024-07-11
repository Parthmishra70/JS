let card = document.createElement("div");
card.className = "container";

document.body.insertAdjacentElement("afterbegin",card);

function Createcard(title, cname, views, month, imgurl) {
    let firstdiv = document.createElement("div");
    firstdiv.className = "container2";

    card.appendChild(firstdiv);

    let imgb = document.createElement("div");
    imgb.className = "imgb";
    firstdiv.appendChild(imgb);

    let parentt = document.createElement("div");
    parentt.className = "parentt";
    imgb.appendChild(parentt);

    let span = document.createElement("span");
    span.className = "timing";
    span.innerHTML = "23:55";
    parentt.appendChild(span);

    let imgbox = document.createElement("img");
    imgbox.src = imgurl;
    firstdiv.appendChild(imgbox);

    let textdiv = document.createElement("div");
    textdiv.className = "textdiv";
    firstdiv.appendChild(textdiv);

    let h2 = document.createElement("h2");
    h2.innerText = title;
    textdiv.appendChild(h2);

    let span1 = document.createElement("span");
    span1.innerText = cname+". ";
    textdiv.appendChild(span1);



    let span2 = document.createElement("span");
    if (views >= 1000 && views < 10000000) {
        span2.innerText = String(views).slice(0,2)+"K. ";
    }else{
        span2.innerText = String(views).slice(0,2)+"M  . ";
    }
    textdiv.appendChild(span2);

    let span3 = document.createElement("span");
    span3.innerText = month+"month ago";
    textdiv.appendChild(span3);
}

Createcard("JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73", "dsgbsdgb", 56700000, "7", "https://i.ytimg.com/vi/5xXFAGbsZfw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYcuEQ8U2aGfC7_Muh-PUoWFevcA");
