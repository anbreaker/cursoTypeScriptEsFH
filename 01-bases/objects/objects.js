"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super speed', 'time travel'],
    };
    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['super force'],
        getName() {
            return this.name;
        },
    };
    console.log(flash.getName());
})();
//# sourceMappingURL=objects.js.map