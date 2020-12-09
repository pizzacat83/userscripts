// ==UserScript==
// @name         Earlier Due Date of ITC-LMS Tasks
// @namespace    pizzacat83.com
// @version      0.1.0
// @description  try to take over the world!
// @author       pizzacat83
// @match        https://itc-lms.ecc.u-tokyo.ac.jp/lms/task
// @updateUrl    https://raw.githubusercontent.com/pizzacat83/userscripts/master/lms_early_due.user.js
// @downloadUrl  https://raw.githubusercontent.com/pizzacat83/userscripts/master/lms_early_due.user.js
// @require      https://moment.github.io/luxon/global/luxon.min.js
// ==/UserScript==

(function() {
    'use strict';
    $('.result_list_line').map((i, e)=>{
        const dateEl = $(e).find('.tasklist-mobile-width-deadline');
        const date = luxon.DateTime.fromJSDate(new Date(dateEl.text()));
        dateEl.text(date.minus(luxon.Duration.fromObject({days: 2})).toFormat('yyyy/MM/dd HH:mm:ss'))
    })
})();
