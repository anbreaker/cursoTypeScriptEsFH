(() => {
  class Avenger {
    static avgAge: number = 35;
    static getAvgAge() {
      return this.name; // name of class :)
    }

    constructor(private name: string, private team: string, public realName?: string) {}

    bio() {
      return `${this.name} (Team - ${this.team})`;
    }
  }

  const antman: Avenger = new Avenger('Antman', 'Captain', 'Scott Lang');
  console.log(antman.bio());

  console.log(Avenger.getAvgAge());
})();
