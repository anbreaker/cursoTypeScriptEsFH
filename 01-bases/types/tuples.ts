(() => {
  const hero: [string, number] = ['Dr Strange', 100];

  hero[1] = 3;
  hero[0] = 'Ironman';

  console.log(hero);

  const heroPowah: [string, number, boolean] = ['Spiderman', 100, false];
  // heroPowah[2] = 'true'
  heroPowah[2] = true;

  console.log(heroPowah);
})();
