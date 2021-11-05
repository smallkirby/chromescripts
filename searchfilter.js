// ==UserScript==
// @name         searchfilter
// @include      /^(http|https):\/\/www\.google\..+\/search.*/
// @version      0.1
// @description  see what you want to see
// @author       nirugiri
// @grant        none
// ==/UserScript==

// encoding: utf-8;
// spaces: 2

(function () {
  'use strict';

  const blacklist = [
    'https://www.sejuku.net',
    'https://techacademy.jp',
  ];

  const elements = document.getElementsByClassName('g');
  let deleted = [];
  for (const target of elements) {
    const cite = target.querySelector("cite")
    if (cite == null) continue;
    blacklist.forEach((victim) => {
      console.log(cite.textContent, victim)
      if (cite.textContent.includes(victim)) {
        const parent = target.parentElement;
        parent.removeChild(target)
        deleted.push(target);
      }
    })
  }

  const parent = elements[0].parentElement.parentElement;
  const div = document.createElement('div');
  const message = `<p>Deleted items: ${deleted.length}</p>`;
  div.innerHTML = message;
  parent.insertBefore(div, elements[0].parentElement);
})();
