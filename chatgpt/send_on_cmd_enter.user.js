// ==UserScript==
// @name         Send message on ⌘+Enter
// @namespace    pizzacat83.com
// @version      0.2.0
// @description  Does not send message when only Enter is pressed, but sends when pressed with ⌘. This improves the UX for those using Japanese IMEs. Moreover, you can send messages with multiple lines.
// @author       pizzacat83
// @match        https://chat.openai.com/chat
// @updateURL    https://raw.githubusercontent.com/pizzacat83/userscripts/chatgpt/send_on_cmd_enter.user.js
// @downloadURL  https://raw.githubusercontent.com/pizzacat83/userscripts/chatgpt/send_on_cmd_enter.user.js
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector('textarea')
      .addEventListener('keydown', (e) => {
      if (e.code == "Enter" && !e.metaKey) {
        e.stopPropagation();
      }
    }, { capture: true });
})();
