interface Person {
  firstName: string;
  lastName: string;
  amount: number;
  debt: number;
}
var people: Person[] = [
  {
    firstName: 'Denis',
    lastName: 'Zemev',
    amount: 54489,
    debt: 0,
  },
  {
    firstName: 'Daniel',
    lastName: 'Sokolov',
    amount: 5448156,
    debt: 249871,
  },
  {
    firstName: 'Viktor',
    lastName: 'Skiba',
    amount: 498795,
    debt: 0,
  },
  {
    firstName: 'Agnya',
    lastName: 'Zemev',
    amount: 5448781,
    debt: 32148,
  },
  {
    firstName: 'Ibrahim',
    lastName: 'Fall',
    amount: 15489,
    debt: 2459,
  },
];

var peopleWithDebt = (peop: Person[]) => {
  return peop.filter((person: Person) => {
    return person.debt != 0;
  });
};

var debtIncr = (peopWithDebt: Person[]) => {
  return peopWithDebt.map((person: Person) => {
    return { ...person, debt: person.debt + person.debt * 0.42 };
  });
};

console.log(debtIncr(peopleWithDebt(people)));
