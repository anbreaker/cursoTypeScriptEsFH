(() => {
  interface Hero {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['super speed', 'time travel'],
    getName() {
      return this.name;
    },
  };

  let superman: Hero = {
    name: 'Clark Kent',
    age: 60,
    powers: ['super speed'],
    getName() {
      return this.name;
    },
  };
})();
