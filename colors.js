"use strict";
window.addEventListener("DOMContentLoaded", start);

function start() {
  getHex();
}
let colorInput = document.querySelector("#color");
let hexInput = document.querySelector("#hex");
let userChoice;

function getHex() {
  colorInput.addEventListener("input", () => {
    userChoice = colorInput.value;
    hexInput.value = userChoice;
    let hex = hexInput.value;
    hexToRgb(hex);
  });
}
function hexToRgb(hex) {
  let red = parseInt(hex.substring(1, 3), 16);
  let green = parseInt(hex.substring(3, 5), 16);
  let blue = parseInt(hex.substring(5), 16);
  const Colors = {
    r: `${red}`,
    g: `${green}`,
    b: `${blue}`,
  };
  showRGB(Colors);
  const HSL = rgbToHsl(Colors);
  showHsl(HSL);
  // console.log(HSL);
}
function showRGB(Colors) {
  let color = `R:${Colors.r} G:${Colors.g} B:${Colors.b}`;
  //   console.log(color);
  let rgbInput = document.querySelector("#rgb");
  rgbInput.value = color;
}
function rgbToHsl(Colors) {
  let r = Colors.r / 255;
  //   console.log(r);
  let g = Colors.g / 255;
  let b = Colors.b / 255;
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
function showHsl(HSL) {
  //   console.log(HSL);
  let colorHSL = `H:${Math.floor(HSL.h)} S:${Math.floor(HSL.s)} L:${Math.floor(
    HSL.l
  )}`;
  let hslInput = document.querySelector("#hsl");
  hslInput.value = colorHSL;
}
