(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activateBatSignal = function () {
        return 'BatSignal!!';
    };
    console.log(typeof activateBatSignal);
    var heroName = returnName();
})();
