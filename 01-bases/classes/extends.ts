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

    getFullNameXmen() {
      console.log(super.getFullName());
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan', true);

  console.log(wolverine);

  wolverine.getFullNameXmen();
})();
