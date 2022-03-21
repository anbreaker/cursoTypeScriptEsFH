(() => {
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string;
  }

  interface Address {
    id: number;
    zip: number;
    city: string;
  }

  const client: Client = {
    name: 'anbrekaer',
    age: 36,
    address: {
      id: 125,
      zip: 6009,
      city: 'Bdj',
    },
    getFullAddress(): string {
      return this.address.city;
    },
  };

  const client2: Client = {
    name: 'Magalí',
    age: 0,
    address: {
      id: 19,
      zip: 6009,
      city: 'Bdj',
    },
    getFullAddress(id: string): string {
      return this.address.city;
    },
  };
})();
