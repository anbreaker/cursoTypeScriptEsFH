(() => {
  const batman: string = 'Batman';
  const greenLantern: string = 'Green Lantern';
  const blackLightning: string = `Hero: Black Lightning`;

  console.log(batman.toUpperCase());

  console.log(`I'm ${batman}`);

  console.log(blackLightning[21]?.toLocaleUpperCase() || 'No is here!');
})();
