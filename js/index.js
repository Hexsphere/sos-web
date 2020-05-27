// IMPORTS
import "@fortawesome/fontawesome-free/js/fontawesome.min";
import "@fortawesome/fontawesome-free/js/solid.min";
import "@fortawesome/fontawesome-free/scss/fontawesome.scss";
import "@fortawesome/fontawesome-free/scss/solid.scss";

import SweetScroll from "sweet-scroll";
import Typed from 'typed.js';

// CODE
document.addEventListener(
  "DOMContentLoaded",
  () => {
    var scroller = new SweetScroll({});
  },
  false
);

const options = {
  strings: ["Smalltalk", "Microsoft .Net", "SQL Server", "Oracle DB"],
  typeSpeed: 70,
  shuffle: true,
  backDelay: 1200,
  loop: true,
  loopCount: Infinity,
  autoInsertCss: false,
};

const typed = new Typed(".header--language", options);
