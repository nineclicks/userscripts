// ==UserScript==
// @name         Peoplesoft Generate Deeplinks
// @namespace    nickgardner
// @version      0.1
// @description  Add deep link generator to favorites menu in PeopleSoft PIA
// @author       Nick Gardner
// @match        *.calpoly.edu/psp/*
// @match        *.calstate.edu/psp/*
// @grant        unsafewindow
// @downloadURL  https://raw.githubusercontent.com/nineclicks/userscripts/master/peoplesoft-generate-deeplinks/peoplesoft-generate-deeplinks.js
// @updateURL    https://raw.githubusercontent.com/nineclicks/userscripts/master/peoplesoft-generate-deeplinks/peoplesoft-generate-deeplinks.js
// ==/UserScript==

(function() {
    'use strict';
    let favs = [
        {
            pre: "https://idp.calpoly.edu/idp/profile/cas/login?method=post&service=",
            text: "Deep Link Prod IDP",
            env: 'prod'
        },
        {
            pre: "https://idp-tst.calpoly.edu/idp/profile/cas/login?method=post&service=",
            text: "Deep Link Test IDP",
            env: 'test'
        }
    ];


    let favList = document.getElementById("pthnavfav");
    let im = document.getElementsByClassName("pthnavfavimg")[0];

    for (let i in favs) {
        if (!favs.hasOwnProperty(i)) {
            continue;
        }

        let fav = favs[i];
        let li1 = document.createElement("li");
        li1.className = "pthnavfav";
        favList.appendChild(li1);
        let a1 = document.createElement("a");
        a1.setAttribute("role", "menuitem");
        a1.setAttribute("href", "#");
        a1.setAttribute("onClick", "prompt('',getLink('" + fav.env + "'))");
        a1.innerText = fav.text;
        li1.appendChild(a1);
        li1.appendChild(im.cloneNode(true));
    }
})();

unsafeWindow.getLink = function(env) {
    'use strict';
    let pres = {
        prod: "https://idp.calpoly.edu/idp/profile/cas/login?method=post&service=",
        test: "https://idp-tst.calpoly.edu/idp/profile/cas/login?method=post&service="
    }
    let pre = pres[env];
    let post = '%26userid=PS%26pwd=z';
    let loc = window.location.href;
    return pre + loc.split("#")[0].split("&").join("%26").split(",").join("%2c") + post;
};
