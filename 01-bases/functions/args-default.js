(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || '').toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || '');
        }
    };
    var name = fullName('Tony', 'Stark', true);
    var name2 = fullName('Tony', '', true);
    console.log({ name: name });
    console.log({ name2: name2 });
})();
