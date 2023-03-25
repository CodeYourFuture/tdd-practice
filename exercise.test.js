/*
- write a function canAdmitToNightClub that takes a person object as an argument and returns true if they can be admitted and false if they cannot
- an unaccompanied minor (under the age of 18) may not be admitted
- any person who is visibly inebriated may not be admitted
- the person object should have the following fields
  - age (Number)
  - isAccompaniedByAdult (Boolean)
  - isVisiblyInebriated (Boolean)
*/
function canAdmitToNightClub(person){
  if(person['isVisiblyInebriated']=== false){
    if(person.age >= 18 || person.isAccompaniedByAdult === true){
      return true;
    }
    else {
      return false;
    }
  } return false;
}


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
    age: 15,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(personUnder18)).toBe(false);
});

test("returns true for a person under 18 with adult", () => {
  const personUnder18withAdult = {
    age: 16,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: true,
  };
  expect(canAdmitToNightClub(personUnder18withAdult)).toBe(true);
});

test("returns false for inebriated person over 18", () => {
  const inebriatedPerson = {
    age: 30,
    isVisiblyInebriated: true,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(inebriatedPerson)).toBe(false);
});