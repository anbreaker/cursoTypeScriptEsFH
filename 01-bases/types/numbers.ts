(() => {
  let avengers: number = 10;

  console.log(avengers);

  const villians = 20;

  if (avengers < villians) console.log('Problems!');
  else console.log('Save!');

  // NaN is a number in js
  avengers = Number('123a'); // NaN

  avengers = 123;

  console.log({ avengers });
})();
