(() => {
  class Apocalipsis {
    static instance: Apocalipsis;
    private constructor(public name: string) {}

    // Singleton constructor
    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("I'm Apocalipsis..., the only one!");
      }

      return Apocalipsis.instance;
    }

    changeName(newName: string): void {
      this.name = newName;
    }
  }

  const apocalipsis = Apocalipsis.callApocalipsis();
  const apocalipsis1 = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();

  apocalipsis.changeName('Xavier');

  // const apocalipsis = new Apocalipsis("I'm Apocalipsis..., the only one!");
  // const apocalipsis1 = new Apocalipsis("I'm Apocalipsis..., the only one!");
  // const apocalipsis2 = new Apocalipsis("I'm Apocalipsis..., the only one!");

  console.log(apocalipsis, apocalipsis1, apocalipsis2);
})();
