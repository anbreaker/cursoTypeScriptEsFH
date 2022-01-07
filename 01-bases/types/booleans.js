"use strict";
// singleton
(() => {
    let isSuperMan = true;
    let isBatman = false;
    isSuperMan = isBatman ? true : false;
    console.log(isBatman);
})();
