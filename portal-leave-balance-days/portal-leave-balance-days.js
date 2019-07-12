// ==UserScript==
// @name         Leave Balances
// @namespace    nickgardner
// @version      0.1
// @description  Change leave hours to leave days
// @author       Nick Gardner
// @match        https://myportal.calpoly.edu/f/u14l1s6/normal/render.uP
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  let re = /^\s*([.0-9]*)\s*Hours.*/;
  let rounding = 10.0; // tenths of a day
  let dayHours = 8.0;

  let portalCont = document.getElementById("portletContent_u14l1n21");
  let leaveTable = portalCont.getElementsByClassName("piTable")[0];
  let cells = leaveTable.getElementsByTagName("td");
  let sickCell = cells[1];
  let vacCell = cells[4];
  let sickHours = parseFloat(re.exec(sickCell.innerText)[1]);
  let vacHours = parseFloat(re.exec(vacCell.innerText)[1]);
  let sickDays = Math.round(sickHours / dayHours * rounding) / rounding;
  let vacDays = Math.round(vacHours / dayHours * rounding) / rounding;
  sickCell.innerText = sickDays + " Days";
  vacCell.innerText = vacDays + " Days";
})();
