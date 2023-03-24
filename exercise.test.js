/*
- write a function canAdmitToNightClub that takes a person object as an argument and returns true if they can be admitted and false if they cannot
- an unaccompanied minor (under the age of 18) may not be admitted
- any person who is visibly inebriated may not be admitted
- the person object should have the following fields
  - age (Number)
  - isAccompaniedByAdult (Boolean)
  - isVisiblyInebriated (Boolean)
*/

function canAdmitToNightClub(person) {
  if (person.isVisiblyInebriated) {
    return false;
  } else {
    if (person.age >= 18) {
      return true;
    } else {
      if (person.isAccompaniedByAdult) {
        return true;
      } else {
        return false;
      }
    }
  }
}

// test.......

test("returns true for a person over 18", () => {
  const personOver18 = {
    age: 30,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(personOver18)).toBe(true);
});

test("returns true for a person over 18", () => {
  const personOver18 = {
    age: 30,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(personOver18)).toBe(true);
});

test("returns false for a person under 18", () => {
  const personUnder18 = {
    age: 17,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(personUnder18)).toBe(false);
});

test("returns true for a person under 18 accompanied by adult", () => {
  const personUnder18 = {
    age: 17,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: true,
  };
  expect(canAdmitToNightClub(personUnder18)).toBe(true);
});

test("returns false for a person visibly inebriated, under 18 accompanied", () => {
  const personUnder18 = {
    age: 17,
    isVisiblyInebriated: true,
    isAccompaniedByAdult: true,
  };
  expect(canAdmitToNightClub(personUnder18)).toBe(false);
});

test("returns false for a person visibly inebriated, 18 years old", () => {
  const personUnder18 = {
    age: 18,
    isVisiblyInebriated: true,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(personUnder18)).toBe(false);
});
