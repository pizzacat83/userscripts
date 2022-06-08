// ==UserScript==
// @name         クチコミを職種で絞り込み
// @namespace    pizzacat83.com
// @version      0.1
// @description  クチコミの職種を正規表現で絞り込むコンテキストメニューです。
// @author       pizzacat83
// @match        https://www.onecareer.jp/companies/*/reviews
// @match        https://www.onecareer.jp/companies/*/reviews?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=onecareer.jp
// @updateURL    https://raw.githubusercontent.com/pizzacat83/userscripts/master/onecareer/filter_review.user.js
// @downloadURL  https://raw.githubusercontent.com/pizzacat83/userscripts/master/onecareer/filter_review.user.js
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
    'use strict';
  const main = () => {
    const pattern = new RegExp(prompt('RegExp for 職種', 'エンジニア|技術|開発'))

    const reviews = document.querySelectorAll('.review')
    const hidden = [...reviews].filter(el => {
      const jobType = el.querySelector('.review-header__top-box-right > div:nth-child(1) .review-header__top-box-body').innerText
      return !pattern.test(jobType)
    })
    hidden.forEach(el => { el.style.display = 'none' })
  }

  GM_registerMenuCommand("職種で絞り込み", main);
})();
