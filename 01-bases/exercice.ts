(() => {
  // Types
  const batman: string = 'Bruce';
  const superman: string = 'Clark';

  const exists: boolean = false;

  // Tuples
  const pairHeroes: [string, string] = [batman, superman];
  const villain: [string, number, boolean] = ['Lex Lutor', 5, true];

  // Arrays
  const partners: string[] = ['Wonder Woman', 'Aquaman', 'San', 'Flash'];

  // Enums
  enum Powers {
    forceAquaman = 0,
    forceBatman = 1,
    forceFlash = 5,
    forceSuperman = 100,
  }

  const forceFlash: Powers = Powers.forceAquaman;
  const forceSuperman: Powers = Powers.forceBatman;
  const forceBatman: Powers = Powers.forceFlash;
  const forceAquaman: Powers = Powers.forceSuperman;

  console.log(Powers);

  // Returns
  function activate_bat_signal(): string {
    return 'activated';
  }

  function ask_for_help(): void {
    console.log('Help!!!');
  }

  // Assertions of type
  const power: any = '100';
  const outOfPower: number = (power as string).length;
  console.log(outOfPower);
})();
