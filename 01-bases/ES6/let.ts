(() => {
  console.log('let');

  const name = 'anbreaker';

  const getName = (): void => {
    console.log('old getName');
  };

  // getName() => {console.log('New getName') }
  // getName()
})();
