(() => {
  const addNumbers = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hello ${name}`;
  const saveTheWorld = () => `The World is saved!`;

  let myFunction1: (y: number, z: number) => number;
  let myFunction2: (y: string) => string;
  let myFunction3: () => void;

  //* myFunction = 10;
  //* console.log(myFunction);

  myFunction1 = addNumbers;
  console.log(myFunction1(1, 2));

  myFunction2 = greet;
  console.log(myFunction2('anbreaker'));

  myFunction3 = saveTheWorld;
  console.log(myFunction3());
})();
