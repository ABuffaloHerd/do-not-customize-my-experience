// ==UserScript==
// @name        "Please help us cuztomize your experience" deletor
// @namespace   Violentmonkey Scripts
// @match       *://*.fandom.com/*
// @grant       none
// @version     1.0
// @author      A very irritated buffalo herd
// @description 14/07/2023, 16:34:25, makes the stupid popup die on fandom.com.
// ==/UserScript==

(function() {
    'use strict';

    // Change 'div-class-to-remove' to the class you want to remove. thanks chatgpt
    let id = 'age-gate';

    window.addEventListener('load', function() {
        let element = document.getElementById(id);
        element.remove();
    }, false);
})();
