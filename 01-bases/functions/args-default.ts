(() => {
  const fullName = (
    firstName: string,
    lastName?: string,
    upper: boolean = false
  ): string => {
    if (upper) {
      return `${firstName} ${lastName || ''}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || ''}`;
    }
  };

  const name = fullName('Tony', 'Stark', true);
  const name2 = fullName('Tony', '', true);

  console.log({ name });
  console.log({ name2 });
})();
