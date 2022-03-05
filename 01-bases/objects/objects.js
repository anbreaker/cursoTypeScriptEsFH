(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super speed', 'time travel']
    };
    flash = {
        name: 'Clark Kent',
        age: 60,
        powers: ['super force'],
        getName: function () {
            return this.name;
        }
    };
    console.log(flash.getName());
})();
