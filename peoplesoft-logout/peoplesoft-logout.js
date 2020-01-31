// ==UserScript==
// @name         Peoplesoft Logout
// @namespace    nickgardner
// @version      0.1
// @description  Fix Peoplesoft non-prod logout
// @author       Nick Gardner
// @match        https://*.calstate.edu/psp/*/?cmd=logout
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/nineclicks/userscripts/master/peoplesoft-logout/peoplesoft-logout.js
// @updateURL    https://raw.githubusercontent.com/nineclicks/userscripts/master/peoplesoft-logout/peoplesoft-logout.js
// ==/UserScript==

(function() {
  document.cookie = 'PS_LOGINLIST=; domain=.cms.calstate.edu; expires=Thu, 01-Jan-1970 01:00:00 GMT; path=/; secure';
  document.cookie = 'PS_LOGINLIST=; domain=.calstate.edu; expires=Thu, 01-Jan-1970 01:00:00 GMT; path=/; secure';
  document.cookie = 'PS_LOGINLIST=; domain=.cs.calstate.edu; expires=Thu, 01-Jan-1970 01:00:00 GMT; path=/; secure';
})();
