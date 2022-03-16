(() => {
  type Avenger = {
    nick: string;
    ironman: string;
    vision: string;
    active: boolean;
    power: number;
  };
  const avengers: Avenger = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    active: true,
    power: 1500,
  };

  const { nick, active } = avengers;

  console.log(nick.toLowerCase(), active);

  const printAvenger = ({ ironman, ...rest }: Avenger) => {
    console.log(`\n${ironman}\n`, rest);
  };

  printAvenger(avengers);

  const avengersArr: string[] = ['Cap. America', 'Ironman', 'Hulk'];

  const [, ironman] = avengersArr;

  console.log(ironman);
})();
