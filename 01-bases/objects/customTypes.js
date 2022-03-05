(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super speed', 'time travel'],
        getName: function () {
            return this.name;
        }
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['super speed'],
        getName: function () {
            return this.name;
        }
    };
    console.log(flash.getName());
})();
