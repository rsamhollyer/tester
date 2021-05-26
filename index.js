"use strict";

const body = document.querySelector("body");
/*  ----------------------- */

const divEl = document.createElement("div");
const titleEl = document.createElement("h1");
/*  ----------------------- */
const divEl2 = document.createElement("div");
const paraEl1 = document.createElement("p");
const paraEl2 = document.createElement("p");
const paraEl3 = document.createElement("p");
/*  ----------------------- */
titleEl.innerText = "Your Name";
paraEl1.innerText = "THIS IS WRONG";
divEl.append(titleEl);

/*  ----------------------- */
divEl2.append(paraEl1, paraEl2, paraEl3);

/*  ----------------------- */
body.append(divEl, divEl2);

/*  ----------------------- */
const selectAllPs = document.querySelectorAll("p");
console.log(selectAllPs);

selectAllPs.forEach(function (sniggledyFart) {
  console.log(sniggledyFart);
  sniggledyFart.innerText = "THIS IS RIGHT";
});
