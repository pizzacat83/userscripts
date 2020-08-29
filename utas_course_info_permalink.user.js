// ==UserScript==
// @name         Permalink on UTAS Syllabus Class Info
// @namespace    pizzacat83.com
// @version      0.1.0
// @description  UTASの授業情報ページに，授業カタログへのリンクを表示します。
// @author       pizzacat83
// @include      /^https:\/\/utas\.adm\.u-tokyo\.ac\.jp\/campusweb\/campussquare\.do/
// @grant        none
// @updateUrl    https://raw.githubusercontent.com/pizzacat83/userscripts/master/utas_course_info_permalink.user.js
// @downloadUrl  https://raw.githubusercontent.com/pizzacat83/userscripts/master/utas_course_info_permalink.user.js
// ==/UserScript==

(function() {
    'use strict';
    if (!$("#main-portlet-title").text().includes('授業情報参照')) return;
    const getPermalink = () => {
        const formData = document.forms.referInputForm.elements;
        return `https://catalog.he.u-tokyo.ac.jp/detail?code=${formData.jikanwaricd.value}&year=${formData.nendo.value}`;
    }
    const a=$('<a></a>').attr({href: getPermalink()}).text('授業カタログ');
    a.insertBefore('#tabs');
})();
