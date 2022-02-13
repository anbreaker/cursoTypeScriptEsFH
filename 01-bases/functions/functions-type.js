(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hello ".concat(name); };
    var saveTheWorld = function () { return "The World is saved!"; };
    var myFunction1;
    var myFunction2;
    var myFunction3;
    //* myFunction = 10;
    //* console.log(myFunction);
    myFunction1 = addNumbers;
    console.log(myFunction1(1, 2));
    myFunction2 = greet;
    console.log(myFunction2('anbreaker'));
    myFunction3 = saveTheWorld;
    console.log(myFunction3());
})();
