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
  if (person.age < 18 && !person.isAccompaniedByAdult) {
    return false;
  }
  if (person.isVisiblyInebriated) {
    return false;
  }
  return true;
}

test("Unaccompanied minor may not be admitted", () => {
  const unaccompaniedMinor = {
    age: 10,
    isAccompaniedByAdult: false,
    isVisiblyInebriated: false,
  };
  expect(canAdmitToNightClub(unaccompaniedMinor)).toEqual(false);
});

test("Inebriated person is not admited", () => {
  const inebriatedPerson = {
    age: 20,
    isAccompaniedByAdult: false,
    isVisiblyInebriated: true,
  };
  expect(canAdmitToNightClub(inebriatedPerson)).toEqual(false);
});
