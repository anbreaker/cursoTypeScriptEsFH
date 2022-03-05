(() => {
  type Hero = {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  };

  let myCustomVariable: string | number | Hero = 'anbreaker';

  myCustomVariable = 23;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    age: 36,
    name: 'anbreaker',
    powers: ['code'],
  };
  console.log(typeof myCustomVariable);
})();
