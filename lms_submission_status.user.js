// ==UserScript==
// @name         Show Submission Status on ITC-LMS Top Page
// @namespace    pizzacat83.com
// @version      0.2.0
// @description  try to take over the world!
// @author       pizzacat83
// @match        https://itc-lms.ecc.u-tokyo.ac.jp/lms/timetable
// @grant        GM_setValue
// @grant        GM_getValue
// @updateUrl    https://raw.githubusercontent.com/pizzacat83/userscripts/master/lms_submission_status.user.js
// @downloadUrl  https://raw.githubusercontent.com/pizzacat83/userscripts/master/lms_submission_status.user.js
// ==/UserScript==

(function() {
    'use strict';
    const CACHE_TIMEOUT = 1000 * 60 * 60; // 1 hour
    const courses = Array.from(new Set(Array.from($('.course_on_timetable')).map(e=>e.id))).map(id=>({id, name: $(`#${id}`).text().trim()}));
    const parser = new DOMParser();
    let i = -1;
    let SLEEP_BETWEEN_FETCH = 1 * 1000; // 1 sec
    const fetchSubmission = async (course) => {
        const date = Date.now();
        const cachedString = GM_getValue(`submit-status-${course.id}`);
        if (cachedString) {
            const cached = JSON.parse(cachedString);
            if (cached.date + CACHE_TIMEOUT > Date.now()) {
                return cached;
            }
        }
        ++i;
        await new Promise((resolve) => {setTimeout(resolve, i * SLEEP_BETWEEN_FETCH)});
        const res = await fetch(`/lms/course?idnumber=${course.id}`);
        const page = parser.parseFromString(await res.text(), 'text/html');
        const submissions = Array.from($('.result_list_txt.submitStatus', page)).map(e=>e.innerText.trim());
        const all = submissions.length;
        const done = all - submissions.filter(x=>x==='未提出').length;
        GM_setValue(`submit-status-${course.id}`, JSON.stringify({all, done, date}));
        return {all, done};
    }
    const showSubmission = async (course) => {
        const {all, done} = await fetchSubmission(course);
        if (all === 0) {
            return;
        }
        $(`[id="${course.id}"]`).each((i,e)=>{
            const doneElement = $('<span></span>').text(done);
            if (done < all) {
                doneElement.addClass('errorMsg');
            }
            const element = $('<p></p>').text(`/${all}`).css({margin:'0'}).prepend(doneElement);
            $(e).next().append(element);
        });
    };
    courses.forEach(showSubmission);
})();
