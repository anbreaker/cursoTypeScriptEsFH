"use strict";
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || ''}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || ''}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    const name2 = fullName('Tony', '', true);
    console.log({ name });
    console.log({ name2 });
})();
//# sourceMappingURL=args-default.js.map