"use strict"
{
    let mih1 = document.createElement("h1");
    let mih5 = document.createElement("h5");
    mih1.appendChild(mih5);
    let midiv = document.createElement("div");
    mih5 = mih5.appendChild(midiv);
    midiv.setAttribute("style", "background-color: cyan");
   let p1 = document.createElement("p");
   let p2 = document.createElement("p");
   let img = document.createElement("img");

    midiv.appendChild(p1);
    midiv.appendChild(p2);
    midiv.appendChild(img);
    p1.textContent = "Paragraph 1";
    p2.textContent = "Paragraph 2";
    img.setAttribute("src", "./Media/indio.jfif");

    document.body.appendChild(mih1);
}