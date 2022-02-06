(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.medium;
    console.log(AudioLevel);
    console.log(currentAudio);
    var AudioLevel2;
    (function (AudioLevel2) {
        AudioLevel2[AudioLevel2["min"] = 1] = "min";
        AudioLevel2[AudioLevel2["medium"] = 2] = "medium";
        AudioLevel2[AudioLevel2["max"] = 10] = "max";
    })(AudioLevel2 || (AudioLevel2 = {}));
    var currentAudio2 = AudioLevel2.medium;
    console.log(AudioLevel2);
    console.log(currentAudio2);
})();
