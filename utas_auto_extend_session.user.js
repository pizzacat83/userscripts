// ==UserScript==
// @name         Auto-extend UTAS Session
// @namespace    https://github.com/pizzacat83
// @version      0.1.0
// @description  UTASセッション自動延長
// @author       pizzacat83
// @include      /^https:\/\/utas\.adm\.u-tokyo\.ac\.jp\/campusweb\/campusportal\.do\?page=main/
// @grant none
// @updateUrl    https://raw.githubusercontent.com/pizzacat83/userscripts/master/utas_auto_extend_session.user.js
// @downloadUrl  https://raw.githubusercontent.com/pizzacat83/userscripts/master/utas_auto_extend_session.user.js
// ==/UserScript==

(function() {
    'use strict';
    setInterval(() => {
        window.extendSession();
        console.debug('extended');
    }, 5*60*1000);
})();
