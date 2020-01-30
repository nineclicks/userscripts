// ==UserScript==
// @name         Leave Balances
// @namespace    nickgardner
// @version      0.1
// @description  Change leave hours to leave days
// @author       Nick Gardner
// @match        https://myportal.calpoly.edu/f/u14l1s6/normal/render.uP
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/nineclicks/userscripts/master/portal-leave-balance-days/portal-leave-balance-days.js
// @updateURL    https://raw.githubusercontent.com/nineclicks/userscripts/master/portal-leave-balance-days/portal-leave-balance-days.js
// ==/UserScript==

(function() {
  'use strict';
  let re = /^\s*([.0-9]*)\s*Hours.*/
  let re2 = /^\s*([0-9]+)\s+Days?.*/

  let table = document.getElementById("portletContent_u14l1n21").getElementsByClassName("piTable")[0];

  let cells = table.getElementsByTagName("td");
  let sickCell = cells[1];
  let vacCell = cells[4];
  let persCell = cells[7];
  let sickHours = parseFloat(re.exec(sickCell.innerText)[1]);
  let vacHours = parseFloat(re.exec(vacCell.innerText)[1]);
  let persDays = parseFloat(re2.exec(persCell.innerText)[1]);
  let sickDays = Math.round(sickHours / 8.0 * 10.0) / 10.0;
  let vacDays = Math.round(vacHours / 8.0 * 10.0) / 10.0;
  let totalDays = Math.floor(sickDays + vacDays + persDays);
  sickCell.innerText = sickDays + " Days";
  vacCell.innerText = vacDays + " Days";

  // Add a row for total useable PTO
  let row = table.insertRow(3);
  row.setAttribute("class", "odd"); // "odd" class for styling
  row.insertCell().innerHTML = "Total Useable PTO:";
  row.insertCell().innerHTML = totalDays + " Days";
  row.insertCell(); // Unused last column

  // Last row is not odd anymore
  table.getElementsByTagName("tr")[4].classList.remove("odd");
})();
