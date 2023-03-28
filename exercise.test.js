/*
- write a function canAdmitToNightClub that takes a person object as an argument and returns true if they can be admitted and false if they cannot
- an unaccompanied minor (under the age of 18) may not be admitted
- any person who is visibly inebriated may not be admitted
- the person object should have the following fields
  - age (Number)
  - isAccompaniedByAdult (Boolean)
  - isVisiblyInebriated (Boolean)
*/

function canAdmitToNightClub(person) {}

// Person A - over 18, not inebriated, no adult
test("is the person over 18", () => {
  const personOver18 = {
    age: 18,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(personOver18)).toBe(true);
});

// Person B - under 18, not inebriated, without adult
test("is the person under 18", () => {
  const personUnder18 = {
    age: 17,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(personUnder18)).toBe(false);
});

// Person C - under 18, not inebriated, with adult
test("is the person under 18 with an adult", () => {
  const personUnder18withAdult = {
    age: 17,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: true,
  };
  expect(canAdmitToNightClub(personUnder18withAdult)).toBe(true);
});

// Person D - over 18, inebriated, without adult
test("is the person drunk", () => {
  const personDrunk = {
    age: 18,
    isVisiblyInebriated: true,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(personDrunk)).toBe(false);
});
