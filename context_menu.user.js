// ==UserScript==
// @name         utilities
// @namespace    pizzacat83.com
// @version      0.1
// @description  utilities in context menu
// @author       pizzacat83
// @match        https://*/*
// @match        http://*/*
// @updateURL    https://raw.githubusercontent.com/pizzacat83/userscripts/master/context_menu.user.js
// @downloadURL  https://raw.githubusercontent.com/pizzacat83/userscripts/master/context_menu.user.js
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function() {
  'use strict';

  const findIDContaining = (el) => {
    if (el.parentElement === null) return null
    if (el.id !== '') return el.id
    return findIDContaining(el.parentElement)
  }

  // store latest event
  // because GM_registerMenuCommand does not provide event to callback
  let event = null
  document.addEventListener("contextmenu", function(event_){
    event = event_
  });

  const copyLinkToElement = async ()=>{
    const id = findIDContaining(event.target)

    if (id !== null) {
      const url = new URL(location)
      url.hash = id
      prompt("Link to element: ", url)
    } else {
      // TODO: provide URL to text fragment
      alert('😢 Failed to find ID.')
    }
  };

  GM_registerMenuCommand("Copy link to element", copyLinkToElement);
})();
