// ==UserScript==
// @name    BT4G clicker
// @version    0.0.1
// @namespace    https://github.com/kolakao

// @description  try to take over the world!
// @author       kolakao
// @match        http://bt4g.org/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @updateURL    https://github.com/kolakao/bt4g-clicker/blob/master/bt4gclicker.meta.js
// @downloadURL  https://github.com/kolakao/bt4g-clicker/blob/master/bt4gclicker.user.js
// ==/UserScript==

(function() {
    'use strict';
    var n = document.querySelector('a[href^="//downloadtorrentfile.com/hash/"]');
    window.location.href = n.href;
})();