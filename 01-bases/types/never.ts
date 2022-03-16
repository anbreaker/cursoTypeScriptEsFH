(() => {
  const error = (message: string): never | boolean => {
    if (false) throw new Error(message);

    return true;
  };

  error('Sos');
})();
