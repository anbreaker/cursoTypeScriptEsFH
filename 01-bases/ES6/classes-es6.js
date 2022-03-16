(() => {
  class Avenger {
    name;
    power;

    constructor(name = '', power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  class FlyingAvenger extends Avenger {
    flying;

    constructor(name, powers) {
      super(name, powers);
      this.flying = true;
    }
  }

  const hulk = new Avenger('Hulk', 9001);
  const falcon = new FlyingAvenger('Falcon', 50);

  console.log(hulk);
  console.log(falcon);
})();
