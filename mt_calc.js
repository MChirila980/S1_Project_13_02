"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 2

   Author: Melinda Chirila    
   Date:   3/26/2019
   
   Filename: mt_calc.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers
      
   buttonClick(e)
      Adds functions to the buttons clicked within the calcutlor
      
   calcKeys(e)
      Adds functions to key pressed within the calculator window 
      
   eraseChar(textStr)
      Erases the last character from the text string, textStr
      
   evalEq(textStr, decimals) 
      Evaluates the equation in textStr, returning a value to the number of decimals specified by the decimals parameter

   lastEq(textStr) 
      Returns the previous expression from the list of expressions in the textStr parameter

*/

init()

buttonClick(e)

//?

calcKeys(e)

eraseChar(textStr)

evalEq(textStr, decimals)

lastEq(textStr)

window.onload = init();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

function init() {
      var calcButtons = document.getElementsByClassName("calcButton");
      for (var i = 0; i < calcButtons.length; i++) {
            calcButtons[i].addEventListener("click", buttonClick);
      }
      document.getElementById("calcWindow").addEventListener("keydown", calcKeys);
}

/**
 * When a button was click.
 * @param {Event} e 
 */
function buttonClick(e) {
var calcValue = document.getElementById("calcWindow").value;
var calcDecimal = document.getElementById("decimals").value;
var buttonValue = e.target.value;
switch (buttonValue) {
      case "del":
 calcValue = "";
      break;
      case "bksp":
 calcValue = eraseChar(calcValue);
      break;
      case "enter":
 calcValue += " = " + evalEq(calcValue, calcDecimal) + "\n";
      break;
      case "prev":
calcValue = lastEq(calcValue);
       break;
      default:

  calcValue += buttonValue;
      break;
      }
      document.getElementById("calcWindow").value = calcValue;
      document.getElementById("calcWindow").focus();
}
//homemade popcorn is theee bestest in the whole world
//
/**
 * 
 * @param {Event} e  
 */
//the function calculator keys
function calcKeys(e) {
var calcValue = document.getElementById("calcWindow").value;
var calcDecimal = document.getElementById("decimals").value;
 switch (e.code) {
      case "Delete":
       calcValue = "";
       break;
      case "Enter":
 calcValue += "=" + evalEq(calcValue, calcDecimal);
       break;
      case "ArrowUp":
  calcValue = lastEq(document.getElementById("calcWindow").value);
       e.preventDefault();
       break;
      }
      document.getElementById("calcWindow").value = calcValue;
}


//no limit to the keys
/* ===================================================================== */

function eraseChar(textStr) {
      return textStr.substr(0, textStr.length - 1);
}

function evalEq(textStr, decimals) {
      var lines = textStr.split(/\r?\n/);
      var lastLine = lines[lines.length - 1];
      var eqValue = eval(lastLine);
      return eqValue.toFixed(decimals);
}

function lastEq(textStr) {
      var lines = textStr.split(/\r?\n/);
      var lastExp = lines[lines.length - 2];
      return lastExp.substr(0, lastExp.indexOf("=")).trim();
}