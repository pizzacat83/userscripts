// ==UserScript==
// @name         Sort ITC-LMS Tasks by Due Date
// @namespace    pizzacat83.com
// @version      0.1.0
// @description  try to take over the world!
// @author       pizzacat83
// @match        https://itc-lms.ecc.u-tokyo.ac.jp/lms/task
// @updateUrl    https://raw.githubusercontent.com/pizzacat83/userscripts/master/lms_sort_tasks.user.js
// @downloadUrl  https://raw.githubusercontent.com/pizzacat83/userscripts/master/lms_sort_tasks.user.js
// ==/UserScript==

(function() {
    'use strict';
    $('#onlineCourseForm > div.block.clearfix > div.contents-list > div > div').html(
        $('.result_list_line').sort(
            (...els) => {
                const [x,y] = els.map((e) => new Date($(e).find('.tasklist-mobile-width-deadline').text()));
                return x > y ? 1 : x < y ? -1 : 0;
            }
        )
    );
})();
