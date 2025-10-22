// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2025-10-22
// @description  try to take over the world!
// @author       You
// @match        https://web.usagi.one/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=usagi.one
// @grant        GM_xmlhttpRequest
// @connect      target.com
// ==/UserScript==

(function () {
  "use strict";

  GM_xmlhttpRequest({
    method: "GET",
    url: "https://web.usagi.one/",
    headers: {
      Referer: "https://google.com/",
    },
    onload: function (res) {
      console.log("Status:", res.status);
      console.log("Response:", res.responseText);
    },
    onerror: function (err) {
      console.error("GM_xmlhttpRequest error:", err);
    },
  });
})();
