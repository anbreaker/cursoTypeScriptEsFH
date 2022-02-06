(() => {
  enum AudioLevel {
    min,
    medium,
    max,
  }

  let currentAudio = AudioLevel.medium;
  console.log(AudioLevel);

  console.log(currentAudio);

  enum AudioLevel2 {
    min = 1,
    medium, // -->2
    max = 10,
  }

  let currentAudio2 = AudioLevel2.medium;
  console.log(AudioLevel2);

  console.log(currentAudio2);
})();
