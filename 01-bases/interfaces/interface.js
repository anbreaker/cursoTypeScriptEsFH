"use strict";
(() => {
    const client = {
        name: 'anbrekaer',
        age: 36,
        address: {
            id: 125,
            zip: 6009,
            city: 'Bdj',
        },
        getFullAddress() {
            return this.address.city;
        },
    };
    const client2 = {
        name: 'Magalí',
        age: 0,
        address: {
            id: 19,
            zip: 6009,
            city: 'Bdj',
        },
        getFullAddress(id) {
            return this.address.city;
        },
    };
})();
//# sourceMappingURL=interface.js.map