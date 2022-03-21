"use strict";
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians)
        console.log('Problems!');
    else
        console.log('Save!');
    avengers = Number('123a');
    avengers = 123;
    console.log({ avengers });
})();
//# sourceMappingURL=numbers.js.map