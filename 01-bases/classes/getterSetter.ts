(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log('Constructor Avenger');
    }

    protected getFullName() {
      return `${this.name} - ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);

      console.log('Constructor Xmen');
    }

    get fullName() {
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
      if (name.length < 3)
        throw new Error('Invalid name should be at least 3 characters.');

      this.name = name;
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan', true);

  console.log(wolverine);
  console.log(wolverine.fullName);

  wolverine.fullName = 'anbreaker';
  console.log(wolverine.fullName);
})();
