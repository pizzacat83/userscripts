// ==UserScript==
// @name         Open Unavailable UTAS Course Info Page
// @namespace    pizzacat83.com
// @version      0.1.1
// @description  科目一覧にリンクがない科目の項目をリンクにします。
// @author       pizzacat83
// @include      /^https:\/\/utas\.adm\.u-tokyo\.ac\.jp\/campusweb\/campussquare\.do/
// @grant        none
// @updateUrl    https://raw.githubusercontent.com/pizzacat83/userscripts/master/utas_course_info_force.user.js
// @downloadUrl  https://raw.githubusercontent.com/pizzacat83/userscripts/master/utas_course_info_force.user.js
// ==/UserScript==

(function() {
    'use strict';
    const title = $("#main-portlet-title").text();
    if (!title.includes('学科・コース別検索（シラバス参照）') || !title.includes('検索結果') ) return;
    console.log($('td > a[onclick^="refer(\'"]').attr('onclick'));
    const refer=(year, shozokuCd, _, lang) => ({year, shozokuCd, lang});
    const {year, shozokuCd, lang} = eval($('td > a[onclick^="refer(\'"]').attr('onclick'));
    const table = $('body > table:last-of-type');
    const jCdIndex = table.find('thead > tr').find('th:contains("時間割コード")').index();
    const courses=table.find('tbody > tr').not(':has(a)');
    const codes = courses.find(`td:nth-of-type(${jCdIndex+1})`);
    console.log(courses);
    const links = courses.find('td:nth-last-of-type(2)').wrapInner('<a></a>').children('a');
    console.log(year, shozokuCd, lang);
    links.attr({onclick: (i) => `refer('${year}','${shozokuCd}','${codes[i].innerText}','${lang}');`}).css({'color': '#027075'});
})();
