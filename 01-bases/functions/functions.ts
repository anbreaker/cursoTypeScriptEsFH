(() => {
  const hero: string = 'Flash';

  function returnName(): string {
    return hero;
  }

  const activateBatSignal = (): string => {
    return 'BatSignal!!';
  };

  console.log(typeof activateBatSignal);

  const heroName = returnName();
})();
