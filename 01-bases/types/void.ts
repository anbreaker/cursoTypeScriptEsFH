(() => {
  function callBatman(): void {
    // return 1; not its posible
    return;
  }

  const callSpiderman = (): void => {
    return;
  };

  const a = callBatman();
  console.log(callSpiderman());
  console.log(a);
})();
