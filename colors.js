"use strict";
window.addEventListener("DOMContentLoaded", start);

let colorInput = document.querySelector("#colorMain");
let hexValue = document.querySelector("#hex").value;
let hslValue = document.querySelector("#hsl").value;
let rgbValue = document.querySelector("#rgb").value;
let BGcolor;
let box1 = document.querySelector("#color1");
let box2 = document.querySelector("#color2");
let box3 = document.querySelector("#color3");
let box4 = document.querySelector("#color4");
let select = document.querySelector("#select").value;
let mainColorBox = document.querySelector("#mainColorBox");

function start() {
  document.querySelector("#select").addEventListener("change", getChoice);
  getInputChanges();
}
function getChoice() {
  let select = document.querySelector("#select").value;
  readSelect(select);
  // console.log(select);
}
function readSelect(select) {
  // console.log("works");
  if (select === "analogus") {
    analogCalc();
  } else if (select === "mono") {
    monocromaticCalc();
  } else if (select === "triad") {
    triadCalc();
  } else if (select === "complementary") {
    complementaryCalc();
  } else if (select === "compound") {
    compoundCalc();
  } else if (select === "shades") {
    shadesCalc();
  }
}

function getInputChanges() {
  colorInput.addEventListener("input", () => {
    // get user choice
    const userChoiceHex = colorInput.value;

    // set hex intput
    document.querySelector("#hex").value = userChoiceHex;
    mainColorBox.style.backgroundColor = userChoiceHex;

    // calculate rgb from hex
    const userChoiceRGB = hexToRgb(userChoiceHex);

    //set rgb intput
    document.querySelector(
      "#rgb"
    ).value = `${userChoiceRGB.r} ${userChoiceRGB.g} ${userChoiceRGB.b}`;

    //calculate hsl from rgb
    const userChoiceHSL = rgbToHsl(userChoiceRGB);

    //set hsl intput
    document.querySelector("#hsl").value = `${Math.floor(
      userChoiceHSL.h
    )} ${Math.floor(userChoiceHSL.s)} ${Math.floor(userChoiceHSL.l)}`;
  });
}

// *****HARMONIES

//ANALOGUS

function analogCalc() {
  // get the hsl value from the html
  const hslValue = document.querySelector("#hsl").value;

  // get the orginal values
  const [originalH, originalS, originalL] = hslValue
    .split(" ")
    .map((value) => parseInt(value));

  // add a few degrees in H
  const analog1HSL = [originalH + 2, originalS, originalL];
  const analog2HSL = [originalH + 4, originalS, originalL];
  const analog3HSL = [originalH + 6, originalS, originalL];
  const analog4HSL = [originalH + 8, originalS, originalL];

  // transform new hsl into rgb
  const rgb1 = hslToRgb(analog1HSL);
  const rgb2 = hslToRgb(analog2HSL);
  const rgb3 = hslToRgb(analog3HSL);
  const rgb4 = hslToRgb(analog4HSL);

  // apply the new rgb to the boxes
  box1.style.backgroundColor = `rgb(${rgb1[0]},${rgb1[1]},${rgb1[2]})`;
  box2.style.backgroundColor = `rgb(${rgb2[0]}, ${rgb2[1]}, ${rgb2[2]})`;
  box3.style.backgroundColor = `rgb(${rgb3[0]}, ${rgb3[1]}, ${rgb3[2]})`;
  box4.style.backgroundColor = `rgb(${rgb4[0]}, ${rgb4[1]}, ${rgb4[2]})`;
}

//MONOCROMATIC

function monocromaticCalc() {
  console.log("monochromatic");
  const hslValue = document.querySelector("#hsl").value;

  const [originalH, originalS, originalL] = hslValue
    .split(" ")
    .map((value) => parseInt(value));

  // add a few degrees in H
  const mono1HSL = [originalH, Math.floor(originalS / 2), originalL];
  const mono2HSL = [originalH, Math.floor(originalS / 4), originalL];
  const mono3HSL = [originalH, Math.floor(originalS / 6), originalL];
  const mono4HSL = [originalH, Math.floor(originalS / 8), originalL];

  // transform new hsl into rgb
  const rgb1 = hslToRgb(mono1HSL);
  const rgb2 = hslToRgb(mono2HSL);
  const rgb3 = hslToRgb(mono3HSL);
  const rgb4 = hslToRgb(mono4HSL);

  // apply the new rgb to the boxes
  box1.style.backgroundColor = `rgb(${rgb1[0]},${rgb1[1]},${rgb1[2]})`;
  box2.style.backgroundColor = `rgb(${rgb2[0]}, ${rgb2[1]}, ${rgb2[2]})`;
  box3.style.backgroundColor = `rgb(${rgb3[0]}, ${rgb3[1]}, ${rgb3[2]})`;
  box4.style.backgroundColor = `rgb(${rgb4[0]}, ${rgb4[1]}, ${rgb4[2]})`;
}

//TRIAD
function triadCalc() {
  const hslValue = document.querySelector("#hsl").value;

  const [originalH, originalS, originalL] = hslValue
    .split(" ")
    .map((value) => parseInt(value));

  // add a few degrees in H
  const triad1HSL = [originalH + 42.5, originalS + 42.5, originalL + 42.5];
  const triad2HSL = [originalH + 20, originalS + 20, originalL + 20];
  const triad3HSL = [originalH + 85, originalS + 85, originalL + 85];
  const triad4HSL = [originalH + 10, originalS + 10, originalL + 10];

  // transform new hsl into rgb
  const rgb1 = hslToRgb(triad1HSL);
  const rgb2 = hslToRgb(triad2HSL);
  const rgb3 = hslToRgb(triad3HSL);
  const rgb4 = hslToRgb(triad4HSL);

  // apply the new rgb to the boxes
  box1.style.backgroundColor = `rgb(${rgb1[0]},${rgb1[1]},${rgb1[2]})`;
  box2.style.backgroundColor = `rgb(${rgb2[0]}, ${rgb2[1]}, ${rgb2[2]})`;
  box3.style.backgroundColor = `rgb(${rgb3[0]}, ${rgb3[1]}, ${rgb3[2]})`;
  box4.style.backgroundColor = `rgb(${rgb4[0]}, ${rgb4[1]}, ${rgb4[2]})`;
}
//COMPLEMENTARY
function complementaryCalc() {
  const hslValue = document.querySelector("#hsl").value;

  const [originalH, originalS, originalL] = hslValue
    .split(" ")
    .map((value) => parseInt(value));

  // add a few degrees in H
  const complem1HSL = [originalH + 113, originalS + 113, originalL + 133];
  const complem2HSL = [originalH + 50, originalS + 50, originalL + 50];
  const complem3HSL = [originalH + 28.25, originalS + 28.25, originalL + 28.25];
  const complem4HSL = [originalH + 14, originalS + 14, originalL + 14];

  // transform new hsl into rgb
  const rgb1 = hslToRgb(complem1HSL);
  const rgb2 = hslToRgb(complem2HSL);
  const rgb3 = hslToRgb(complem3HSL);
  const rgb4 = hslToRgb(complem4HSL);

  // apply the new rgb to the boxes
  box1.style.backgroundColor = `rgb(${rgb1[0]},${rgb1[1]},${rgb1[2]})`;
  box2.style.backgroundColor = `rgb(${rgb2[0]}, ${rgb2[1]}, ${rgb2[2]})`;
  box3.style.backgroundColor = `rgb(${rgb3[0]}, ${rgb3[1]}, ${rgb3[2]})`;
  box4.style.backgroundColor = `rgb(${rgb4[0]}, ${rgb4[1]}, ${rgb4[2]})`;
}

//COMPOUND
function compoundCalc() {
  // get the hsl value from the html
  const hslValue = document.querySelector("#hsl").value;

  // get the orginal values
  const [originalH, originalS, originalL] = hslValue
    .split(" ")
    .map((value) => parseInt(value));

  // add a few degrees in H
  const compund1HSL = [originalH + 113, originalS + 113, originalL + 133];
  const compund2HSL = [originalH, originalS, originalL + 4];
  const compund3HSL = [originalH, originalS, originalL + 6];
  const compund4HSL = [originalH, originalS, originalL + 8];

  // transform new hsl into rgb
  const rgb1 = hslToRgb(compund1HSL);
  const rgb2 = hslToRgb(compund2HSL);
  const rgb3 = hslToRgb(compund3HSL);
  const rgb4 = hslToRgb(compund4HSL);

  // apply the new rgb to the boxes
  box1.style.backgroundColor = `rgb(${rgb1[0]},${rgb1[1]},${rgb1[2]})`;
  box2.style.backgroundColor = `rgb(${rgb2[0]}, ${rgb2[1]}, ${rgb2[2]})`;
  box3.style.backgroundColor = `rgb(${rgb3[0]}, ${rgb3[1]}, ${rgb3[2]})`;
  box4.style.backgroundColor = `rgb(${rgb4[0]}, ${rgb4[1]}, ${rgb4[2]})`;
}

//SHADES
function shadesCalc() {
  // get the hsl value from the html
  const hslValue = document.querySelector("#hsl").value;

  // get the orginal values
  const [originalH, originalS, originalL] = hslValue
    .split(" ")
    .map((value) => parseInt(value));

  // add a few degrees in H
  const shades1HSL = [originalH, originalS, originalL + 2];
  const shades2HSL = [originalH, originalS, originalL + 4];
  const shades3HSL = [originalH, originalS, originalL + 6];
  const shades4HSL = [originalH, originalS, originalL + 8];

  // transform new hsl into rgb
  const rgb1 = hslToRgb(shades1HSL);
  const rgb2 = hslToRgb(shades2HSL);
  const rgb3 = hslToRgb(shades3HSL);
  const rgb4 = hslToRgb(shades4HSL);

  // apply the new rgb to the boxes
  box1.style.backgroundColor = `rgb(${rgb1[0]},${rgb1[1]},${rgb1[2]})`;
  box2.style.backgroundColor = `rgb(${rgb2[0]}, ${rgb2[1]}, ${rgb2[2]})`;
  box3.style.backgroundColor = `rgb(${rgb3[0]}, ${rgb3[1]}, ${rgb3[2]})`;
  box4.style.backgroundColor = `rgb(${rgb4[0]}, ${rgb4[1]}, ${rgb4[2]})`;
}

//COLOR TRANSLATIONS

function hslToRgb([h100, s100, l100]) {
  var r, g, b;

  const h = h100 / 100;
  const s = s100 / 100;
  const l = l100 / 100;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToHsl(rgbColors) {
  let r = rgbColors.r / 255;
  //   console.log(r);
  let g = rgbColors.g / 255;
  let b = rgbColors.b / 255;
  let h, s, l;
  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;
  //   console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
  const hsl = {
    h: h,
    s: s,
    l: l,
  };

  return hsl;
}

function hexToRgb(hex) {
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5), 16);
  return {
    r: `${red}`,
    g: `${green}`,
    b: `${blue}`,
  };
}
