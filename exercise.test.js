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
  return Object.keys(person).length < 3
    ? `No user information provided`
    : person.age >= 18 && !person.isVisiblyInebriated
    ? true
    : person.age <= 18 &&
      !person.isVisiblyInebriated &&
      person.isAccompaniedByAdult
    ? true
    : false;
}
test("returns true for a person over 18", () => {
  const personOver18 = {
    age: 30,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(personOver18)).toBe(true);
});

test("returns false for an inebriated person over 18", () => {
  const inebriatedPerson = {
    age: 25,
    isVisiblyInebriated: true,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(inebriatedPerson)).toBe(false);
});

test("returns false for  an unaccompanied person under 18>", () => {
  const personUnder18 = {
    age: 16,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(personUnder18)).toBe(false);
});

test("returns false for an inebriated a person under 18", () => {
  const inebriatedPerson = {
    age: 15,
    isVisiblyInebriated: true,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(inebriatedPerson)).toBe(false);
});

test("returns true for an accompanied person under 18", () => {
  const AccompaniedByAdult = {
    age: 16,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: true,
  };
  expect(canAdmitToNightClub(AccompaniedByAdult)).toBe(true);
});

test("returns error for no information provided", () => {
  const noInfo = {};
  expect(canAdmitToNightClub(noInfo)).toBe(`No user information provided`);
});

test("returns error for no information about user age provided", () => {
  const noInfo = {
    isVisiblyInebriated: false,
    isAccompaniedByAdult: true,
  };
  expect(canAdmitToNightClub(noInfo)).toBe(`No user information provided`);
});
