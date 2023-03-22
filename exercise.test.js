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
  let response;
  if (person.isVisiblyInebriated) {
    response = false;
  } else if (person.age < 18 && person.isAccompaniedByAdult === false) {
    response = false;
  } else {
    response = true;
  }
  return response;
}

// test section
test("returns true for a person over 18 and is not inebriated", () => {
  // GIVEN
  const personOver18 = {
    age: 30,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: false,
  };
  // WHEN
  const arg = canAdmitToNightClub(personOver18);
  // THEN
  expect(arg).toBe(true);
});

test("returns true for a person equal 18 and is not inebriated", () => {
  const personIsEqual18 = {
    age: 30,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(personIsEqual18)).toBe(true);
});
test("returns false for an inebriated person", () => {
  const inebriatedPerson = {
    age: 20,
    isVisiblyInebriated: true,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(inebriatedPerson)).toBe(false);
});
test("returns false for a person under 18 without a companion", () => {
  const personUnder18 = {
    age: 17,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(personUnder18)).toBe(false);
});
test("returns true for a person under 18 with a companion and is not inebriated", () => {
  const personUnder18 = {
    age: 17,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: true,
  };
  expect(canAdmitToNightClub(personUnder18)).toBe(true);
});
test("returns false for a person under 18 with a companion and is inebriated", () => {
  const personUnder18 = {
    age: 17,
    isVisiblyInebriated: true,
    isAccompaniedByAdult: true,
  };
  expect(canAdmitToNightClub(personUnder18)).toBe(false);
});


