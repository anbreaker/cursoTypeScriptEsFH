(() => {
  // Objetos

  type Vehicle = {
    carBody: string;
    model: string;
    bulletproof: boolean;
    passengers: number;
    shoot?: () => void;
  };

  const batMovil: Vehicle = {
    carBody: 'Black',
    model: '6x6',
    bulletproof: true,
    passengers: 4,
  };

  const bumbleBee: Vehicle = {
    carBody: 'Yellow with black',
    model: '4x2',
    bulletproof: true,
    passengers: 4,
    shoot() {
      // El metodo shoot es opcional
      console.log('shooting');
    },
  };

  // Villains debe de ser un arreglo de objetos personalizados

  type Villain = {
    name: string;
    age: number;
    mutant: boolean;
  };

  const villains: Villain[] = [
    {
      name: 'Lex Luthor',
      age: 54,
      mutant: false,
    },
    {
      name: 'Erik Magnus Lehnsherr',
      age: 49,
      mutant: true,
    },
    {
      name: 'James Logan',
      age: undefined,
      mutant: true,
    },
  ];

  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis

  type Charles = {
    power: string;
    height: number;
  };

  const charles: Charles = {
    power: 'psychic',
    height: 1.78,
  };

  type Apocalipsis = {
    leader: boolean;
    members: string[];
  };

  const apocalipsis: Apocalipsis = {
    leader: true,
    members: ['Magneto', 'Storm', 'Psylocke', 'Angel'],
  };

  console.log(apocalipsis);
  console.log(charles);

  // Mystique, debe poder ser cualquiera de esos dos mutants (charles o apocalipsis)
  let mystique: Charles | Apocalipsis;

  mystique = charles;
  mystique = apocalipsis;
})();
