(function () {
    var error = function (message) {
        if (false)
            throw new Error(message);
        return true;
    };
    error('Sos');
})();
