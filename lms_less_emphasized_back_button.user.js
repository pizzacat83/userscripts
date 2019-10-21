// ==UserScript==
// @name         Less Emphasized Back Button on ITC-LMS
// @namespace    https://github.com/pizzacat83
// @version      0.1.0
// @description  ITC-LMS課題提出ページの「前の画面に戻るボタン」を目立たない色にします。
// @author       pizzacat83
// @include      /^https:\/\/itc-lms.ecc.u-tokyo.ac.jp\/lms\/course\/report\/submission/
// @grant        none
// @updateUrl    https://raw.githubusercontent.com/pizzacat83/userscripts/master/lms_less_emphasized_back_button.user.js
// @downloadUrl  https://raw.githubusercontent.com/pizzacat83/userscripts/master/lms_less_emphasized_back_button.user.js
// ==/UserScript==

(function() {
    'use strict';
    const color = '#9ba4a9';
    $('.course_on_report_submission').css({'background-color': color, 'border-color': color});
    $('#backPage').css({'background-color': color, 'border-color': color});
})();
