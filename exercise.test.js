/*
- write a function canAdmitToNightClub that takes a person object as an argument and returns true if they can be admitted and false if they cannot
- an unaccompanied minor (under the age of 18) may not be admitted
- any person who is visibly inebriated may not be admitted
- the person object should have the following fields
  - age (Number)
  - isAccompaniedByAdult (Boolean)
  - isVisiblyInebriated (Boolean)
*/

// a function to check if a given person is not inebriated or minor
function canAdmitToNightClub(person) {
  // checks if they are not inebriated
  if (person.isVisiblyInebriated === false) {
    // checks if they are not a minor
    if (person.age > 17 || person.isAccompaniedByAdult === true) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

/*
  To run the code use the command below in the terminal

  npm test -- --testPathPattern exercise.test.js
  
*/

/*
 This test will be false as they are minor
*/

test("is the person under 18", () => {
  const minorNotAccompaniedByAdult = {
    age: 17,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(minorNotAccompaniedByAdult)).toBe(false);
});

/*
 This test will be true because they are not minor
*/

test("When they are over 17", () => {
  const notMinor = {
    age: 18,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(notMinor)).toBe(true);
});

/*
 This test will be false because they are visible inebriated
*/

test("is the person drunk", () => {
  const visiblyInebriated = {
    age: 30,
    isVisiblyInebriated: true,
    isAccompaniedByAdult: false,
  };
  expect(canAdmitToNightClub(visiblyInebriated)).toBe(false);
});

/*
This test will be true because they are minor but accompanied by adult
*/

test("is the person under 18 with an adult", () => {
  const minorAccompaniedByAdult = {
    age: 17,
    isVisiblyInebriated: false,
    isAccompaniedByAdult: true,
  };
  expect(canAdmitToNightClub(minorAccompaniedByAdult)).toBe(true);
});
