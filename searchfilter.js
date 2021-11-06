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
    // techs
    'https://www.sejuku.net',
    'https://techacademy.jp',
    'https://nekoroblog.com',
    'https://プログラミングの始め方.com',
    'https://miraiworks.org',
    'https://tech-camp.in',
    'https://itthestudy.com',
    'https://codelearn.jp',
    'https://stem-academykids.com',
    'https://liskul.com',
    'https://donachikiblog.com',
    'https://www.furikatu.com',
    'https://blog.codecamp.jp',
    'http://www.c-lang.org',

    // news
    'https://news.yahoo.co.jp',

    // misc
    'https://detail.chiebukuro.yahoo.co.jp',

    // alian
    'https://www.instagram.com',
    'https://www.tiktok.com',

    // spam
  ];

  const elements = document.getElementsByClassName('g');
  let deleted = [];
  for (const target of elements) {
    const cite = target.querySelector("cite")
    if (cite == null) continue;
    blacklist.forEach((victim) => {
      if (cite.textContent.includes(victim)) {
        deleted.push(target);
      }
    })
  }

  for (const target of deleted) {
    const parent = target.parentElement;
    parent.removeChild(target)
  }

  const parent = elements[0].parentElement.parentElement;
  const div = document.createElement('div');
  const message = `<p>Deleted items: ${deleted.length}</p>`;
  div.innerHTML = message;
  parent.insertBefore(div, elements[0].parentElement);
})();
