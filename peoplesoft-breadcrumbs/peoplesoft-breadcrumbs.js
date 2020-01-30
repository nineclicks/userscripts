// ==UserScript==
// @name         PS Breadcrumbs
// @namespace    nickgardner
// @version      0.1
// @description  Add a button to PeopleSoft to copy breadcrumbs.
// @author       Nick Gardner
// @match        https://cslodev.cs.calstate.edu/psp/*
// @match        https://cmsweb.pscs.calpoly.edu/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/nineclicks/userscripts/master/peoplesoft-breadcrumbs/peoplesoft-breadcrumbs.js
// @updateURL    https://raw.githubusercontent.com/nineclicks/userscripts/master/peoplesoft-breadcrumbs/peoplesoft-breadcrumbs.js
// ==/UserScript==

(function() {
    'use strict';
    var node = document.createElement("div");
    node.setAttribute("style", "margin: 0 10px;");
    node.innerHTML = '<a href="#" onclick="bcfn()">Copy Breadcrumbs</a>';
    document.getElementById("ptdropdownmenu").appendChild(node);

    window.bcfn = function() {
        function stripHtml(html)
        {
            // https://stackoverflow.com/a/822486
            var tmp = document.createElement("DIV");
            tmp.innerHTML = html;
            return tmp.textContent || tmp.innerText || "";
        }

        function copyToClip(str) {
            // https://stackoverflow.com/a/50067769
            function listener(e) {
                e.clipboardData.setData("text/html", str);
                e.clipboardData.setData("text/plain", stripHtml(str));
                e.preventDefault();
            }
            document.addEventListener("copy", listener);
            document.execCommand("copy");
            document.removeEventListener("copy", listener);
        };

        let menu = document.getElementById("pthbcUlScroll");
        let items = menu.querySelectorAll(".pthnavbarfldr, .pthnavbarcref");
        let labels = [];
        for (let i in items) {
            if (! items.hasOwnProperty(i)) {
                continue;
            }
            let item = items[i];
            let label = item.innerText;
            labels.push('<u>' + label + '</u>');
        }
        let bcString = labels.join(" > ");
        copyToClip(bcString);
    }
})();
